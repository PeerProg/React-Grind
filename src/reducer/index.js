import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import tabReducer from './tab.reducer';

const reducer = combineReducers({
  tab: tabReducer,
  user: userReducer
});

export default reducer;
