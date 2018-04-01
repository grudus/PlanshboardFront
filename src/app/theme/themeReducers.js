import { REMOVE_BLUR, SET_BLUR, START_LOADING, STOP_LOADING } from './themeActionTypes';

const initialState = { blur: false, loading: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BLUR:
      return { ...state, blur: true };
    case REMOVE_BLUR:
      return { ...state, blur: false };
    case START_LOADING:
      return { ...state, loading: true };
    case STOP_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};
