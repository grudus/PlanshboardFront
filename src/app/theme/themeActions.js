import {
  CHANGE_THEME, REMOVE_BLUR, SET_BLUR, START_LOADING, STOP_LOADING,
} from './themeActionTypes';
import { DARK, LIGHT, LOCAL_STORAGE_THEME_KEY } from './themeTypes';

export const addBlur = () => ({ type: SET_BLUR });
export const removeBlur = () => ({ type: REMOVE_BLUR });
export const startLoading = () => ({ type: START_LOADING });
export const stopLoading = () => ({ type: STOP_LOADING });

export const changeTheme = theme => (dispatch) => {
  // noinspection JSUnresolvedVariable
  const storage = window.localStorage;
  // noinspection JSUnresolvedFunction
  storage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  dispatch({ type: CHANGE_THEME, theme });
};

export const darkTheme = () => changeTheme(DARK);
export const lightTheme = () => changeTheme(LIGHT);
