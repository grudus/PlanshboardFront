import {
  CHANGE_THEME, REMOVE_BLUR, SET_BLUR, START_LOADING, STOP_LOADING,
} from './themeActionTypes';
import { LIGHT, LOCAL_STORAGE_THEME_KEY } from './themeTypes';

const getThemeType = () => {
  // noinspection JSUnresolvedVariable
  const storage = window.localStorage;
  // noinspection JSCheckFunctionSignatures
  return storage.getItem(LOCAL_STORAGE_THEME_KEY) || LIGHT;
};

const themeType = getThemeType();
const initialState = { blur: false, loading: false, type: themeType };

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
    case CHANGE_THEME:
      return { ...state, type: action.theme };
    default:
      return state;
  }
};
