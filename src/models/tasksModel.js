import { action, thunk } from "easy-peasy";
import api from "../api";

export const tasksModel = {
  userId: null,
  setUserId: action((state, payload) => state.userId = payload), 
  tasks: [],
  syncTasks: thunk(async (actions,payload) => {
    await api.get(`/users/tasks/${localStorage.getItem('userId')}`).then(res => {
      actions.syncedTasks(res.data);
    });
  }),
  syncedTasks: action((state, payload) => {
     state.tasks = payload.filter(task => !task.deleted);
  }),
  findTask: thunk(async actions => {
    await api.get("/users/find/tasks/3").then(res => {
      actions.foundTask(res.data.task);
    });
  }),
  foundTask: action((state, payload) => {
    state.editTask = { ...payload };
  }),
  updateTask: thunk(async (actions, payload) => {
    console.info(payload);
    await api.put(`/users/tasks/${payload.id}`, payload).then(res => {
      actions.updatedTask(res.data.data);
    });
  }),
  updatedTask: action((state, payload) => {
    state.tasks = state.tasks.map(task => {
      if (task.id === payload.id) {
        task = { ...payload };
      }
      return task;
    });
  }),
  createTask: thunk(async (actions, payload) => {
    await api.post(`/users/tasks`, payload).then(res => {
      console.log(res.data);
      actions.createdTask(res.data.task);
    });
  }),
  createdTask: action((state, payload) => {
    state.tasks.push(payload);
  }),
  deleteTask: thunk(async (actions, payload) => {
    await api.delete(`/users/tasks/${payload.id}`, payload).then(res => {
      console.log(res.data);

      actions.deletedTask(res.data);
    });
  }),
  deletedTask: action((state, payload) => {
    console.log(payload);
    state.tasks = state.tasks.filter(task => task.id !== payload.id);
  })
};
