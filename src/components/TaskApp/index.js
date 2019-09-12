import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import TaskCard from "../TaskCard";
import { Container, Typography } from "@material-ui/core";
import SearchBar from '../searchBar';
import useStyles from '../../App_styles';
import TaskAdd from '../TaskAdd';
function TaskApp() {
  const classes = useStyles();
  const tasks = useStoreState(state => state.taskStore.tasks);
  const syncTasks = useStoreActions(action => action.taskStore.syncTasks);
  const userId = useStoreState(state=> state.taskStore.userId)
  const setUserId = useStoreActions(action => action.taskStore.setUserId);
  useEffect(() => {
    setUserId(userId);
    syncTasks(userId);
    
  }, [syncTasks,userId]);
  return (
    <div>
      <Container>
        <Typography className={classes.root}>
          Bem Vindo ao Gerenciador de Tarefas HubTec
        </Typography>
        <Typography className={classes.root} >
          Adicione Aqui Sua Tarefa!
        </Typography>
        <TaskAdd></TaskAdd>
        <SearchBar></SearchBar>
      </Container>
      
      <Container>
        {tasks.map(task => {
          return (
            <div key={task.id} style={{ padding: 5 }}>
              <TaskCard task={task}></TaskCard>
            </div>
          );
        })}
      </Container>
    </div>
  );
}

export default TaskApp;
