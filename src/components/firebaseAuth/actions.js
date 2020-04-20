import {
  SIGN_OUT,
  SIGN_IN,
  DEFAULT_STATE
} from './constants';



export const signIn = (auth, onSignOutClick = null) => {
  return {
    type: SIGN_IN,
    payload: auth
  };
};

export const signOut = (auth = null) => {
  return {
    type: SIGN_OUT,
    payload: auth
  };
};
