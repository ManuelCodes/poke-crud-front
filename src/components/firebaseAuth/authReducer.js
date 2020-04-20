import {
  SIGN_IN,
  SIGN_OUT,
  DEFAULT_STATE
} from './constants';

const INITIAL_STATE = {
  isSignedIn: null,
  sessionStorage: null
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        sessionStorage: action.payload
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        sessionStorage: {signIn: action.payload, user: null}
      };
    default:
      return state;
  }
};

export default authReducer;
