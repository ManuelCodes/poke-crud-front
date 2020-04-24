import javaApi from '../../apis/java';
import history from '../../history';

import {
  CREATE_POKEMON
} from './constants';


export const createPokemon = formValues => async (dispatch, getState) => {
  const response = await javaApi.post('/national-pokedex/add-pokemon', { ...formValues } );
  dispatch( {
    type: CREATE_POKEMON,
    payload: response.data
  });
  history.push('/');
};
