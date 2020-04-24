import { combineReducers } from 'redux';
import authReducer from '../components/firebaseAuth/authReducer';
import nationalPokedexReducer from '../components/pokemons/reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  auth: authReducer,
  nationalPokedex: nationalPokedexReducer,
  form: formReducer
});

export default reducers;
