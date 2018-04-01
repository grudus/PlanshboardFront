import { REMOVE_BLUR, SET_BLUR, START_LOADING, STOP_LOADING } from './themeActionTypes';

export const addBlur = () => ({ type: SET_BLUR });
export const removeBlur = () => ({ type: REMOVE_BLUR });
export const startLoading = () => ({ type: START_LOADING });
export const stopLoading = () => ({ type: STOP_LOADING });
