import { api, postApi } from '../../../commons/httpWrapper';

export const getAllPlayResultsRequest = boardGameId => api(`/api/board-games/${boardGameId}/plays/results`);
export const addNewPlayRequest = (boardGameId, results, date, note) =>
  postApi(`/api/board-games/${boardGameId}/plays`, { results, date, note });
