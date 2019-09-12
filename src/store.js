import { createStore } from 'easy-peasy';  // 👈 import
import storeModel from './models';

const store = createStore(storeModel); // 👈 create our store

export default store;

