import { api, postApi } from '../../../commons/http-wrapper';

export const getSpecificBoardGame = id => api(`/api/board-games/${id}`);
export const boardNameExistsRequest = name => api(`/api/board-games/exists?name=${name}`);
export const getBoardGamesRequest = () => api('/api/board-games');
export const addBoardGameRequest = name => postApi('/api/board-games', { name });
export const deleteBoardGameRequest = id => api(`/api/board-games/${id}`, { method: 'DELETE' });
