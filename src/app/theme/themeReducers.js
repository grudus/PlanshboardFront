import { REMOVE_BLUR, SET_BLUR } from './themeActionTypes';

const initialState = { blur: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BLUR:
      return { ...state, blur: true };
    case REMOVE_BLUR:
      return { ...state, blur: false };
    default:
      return state;
  }
};
