import { combineReducers } from 'redux';
import authReducer from '../components/firebaseAuth/authReducer';

const reducers = combineReducers({
  auth: authReducer
  //test: 'test'
});

export default reducers;
