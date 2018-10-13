import {
  LOGIN, LOGIN_CURRENT_USER, LOGOUT, TRY_TO_LOGIN,
} from './authActionsTypes';

const initialState = {
  token: '',
  isLogged: false,
  isTryingToLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state, token: action.token, isLogged: true, isTryingToLogin: false,
      };
    case TRY_TO_LOGIN:
      return { ...state, isTryingToLogin: true };
    case LOGIN_CURRENT_USER:
      return {
        ...state, isTryingToLogin: false, isLogged: true, token: action.token,
      };
    case LOGOUT: {
      return { ...state, isLogged: false, token: '' };
    }
    default:
      return state;
  }
};
