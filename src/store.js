import { createStore } from 'redux';
import tabReducer from './reducer/index';

const store = createStore(tabReducer);

export default store;
