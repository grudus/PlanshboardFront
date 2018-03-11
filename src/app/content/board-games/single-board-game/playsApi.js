import { api, postApi } from '../../../commons/httpWrapper';

export const getAllPlayResultsRequest = boardGameId => api(`/api/board-games/${boardGameId}/plays/results`);
export const addNewPlayRequest = (boardGameId, opponents) => postApi(`/api/board-games/${boardGameId}/plays`, { opponents });
