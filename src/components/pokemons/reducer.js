import {
  CREATE_POKEMON
} from './constants';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_POKEMON:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}
