import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import { useStoreState, useStoreActions } from "easy-peasy";
const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#EDF1F6",
    borderRadius: 3,
    display: "flex",
    flexWrap: "wrap",
    marginBottom: 30
  },
  container_fluid: {
    width: "100%"
  },
  textField1: {
    width: "49%",
    marginRight: "1%"
  },
  textField2: {
    width: "49%",
    marginLeft: "1%"
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  submit: {
    color: "#EDF1F6",
    backgroundColor: "#FF5756",
    width: "100%",
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function TaskAdd() {
  const classes = useStyles();
  const createTask = useStoreActions(action => action.taskStore.createTask);
  const userId = useStoreState(state => state.taskStore.userId);
  const [task, setTasks] = React.useState({
    deleted: false,
    description: "",
    finalDate: "",
    title: "",
    userId: localStorage.getItem('userId')
  });
  
  const handleChange = name => event => {
    setTasks({ ...task, [name]: event.target.value });
  };
  return (
    <form action='javascript:;' className={classes.container} noValidate autoComplete="off">
      <Container>
        <TextField
          required
          id="outlined-required"
          label="Título"
          placeholder="Digite o Título da Tarefa."
          className={classes.textField1}
          margin="normal"
          variant="outlined"
          value={task.title}
          onChange = {handleChange('title')}
        />
        
        <TextField
          required
          id="outlined-required"
          label="Data Final"
          placeholder="Data da Tarefa. Ex.: 01/01/0001."
          className={classes.textField2}
          margin="normal"
          type="date"
          variant="outlined"
          value={task.finalDate}
          onChange = {handleChange('finalDate')}
        />
      </Container>
      
      <Container className={classes.container_fluid}>
        <TextField
          id="outlined-multiline-static"
          label="Descrição"
          multiline
          rows="4"
          placeholder="Descrição da Tarefa"
          margin="normal"
          variant="outlined"
          fullWidth
          value={task.description}
          onChange = {handleChange('description')}
        />
        <Button
          type="submit"
          variant="contained"
          className={classes.submit}
          onClick={() =>
            createTask(task)
          }
        >
          Criar Aqui Sua Nova Tarefa
        </Button>
      </Container>
    </form>
  );
}
