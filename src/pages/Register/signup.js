import React from "react";
import { Formik, Form, Field } from "formik";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TextField } from "formik-material-ui";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import useStyles from './signup_styles';
import Container from "@material-ui/core/Container";
import api from '../../api';
import { withRouter } from "react-router-dom";
import SignupSchema from "./signup_yup";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


export const SignUp = withRouter(({history}) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        password: ""
      }}
      onSubmit={async(values, actions) => {
        await api.post("users/register", values );
        history.push("/");
        actions.setSubmitting(false);
      }}
      validationSchema={SignupSchema}
      render={formikProps => (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    variant="outlined"
                    fullWidth
                    label="Nome do Usuário"
                    name="userName"
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    variant="outlined"
                    fullWidth
                    label="Endereço de Email"
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
                    label="Senha"
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
                Sign Up
              </Button>
              <Grid >
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Voltar para a tela de Login? Clique aqui!"}
                </Link>
              </Grid>
            </Grid>
            </Form>
            <Box mt={8}>
                <Copyright />
            </Box>
          </div>
        </Container>
      )}
    />
  );
});




