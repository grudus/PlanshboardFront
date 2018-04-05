import { api, deleteApi, postApi } from '../../../commons/httpWrapper';

export const getAllPlayResultsRequest = boardGameId => api(`/api/board-games/${boardGameId}/plays/results`);
export const addNewPlayRequest = (boardGameId, results, date, note) =>
  postApi(`/api/board-games/${boardGameId}/plays`, { results, date, note });

export const deletePlayRequest = (boardGameId, playId) => deleteApi(`/api/board-games/${boardGameId}/plays/${playId}`);
