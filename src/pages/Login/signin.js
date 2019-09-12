import React from "react";
import { Formik, Form, Field } from "formik";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TextField } from "formik-material-ui";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import api from "../../api";
import { withRouter } from "react-router-dom";
import { login } from "../../auth";
import useStyles from "./signin_styles";
import SignInSchema from "./signin_yup";
import { useStoreActions } from "easy-peasy";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" container>
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Tasks Manager HubTec
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const SignIn = withRouter(({ history }) => {
  const setUserId = useStoreActions(action => action.taskStore.setUserId);
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      onSubmit={async (values, actions) => {
        
        const response = await api.post("login", values);
        localStorage.setItem('userId', response.data.user.id);
        alert(JSON.stringify(response.data));
        setUserId(response.data.user.id);
        login(response.data.token);
        history.push("/tasks");
        actions.setSubmitting(false);
      }}
      validationSchema={SignInSchema}
      render={formikProps => (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    variant="outlined"
                    fullWidth
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    variant="outlined"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    component={TextField}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={formikProps.isSubmitting}
              >
                Sign In
              </Button>
            </Form>
            <Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Você não possui uma Conta? Por favor clique em Registrar"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={8}>
              <Copyright />
            </Box>
          </div>
        </Container>
      )}
    />
  );
});
export default SignIn;
