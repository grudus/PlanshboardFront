import { api, deleteApi, postApi, putApi } from '../../commons/httpWrapper';

export const getSpecificBoardGame = id => api(`/api/board-games/${id}`);
export const boardNameExistsRequest = name => api(`/api/board-games/exists?name=${name}`);
export const getBoardGamesRequest = () => api('/api/board-games');
export const addBoardGameRequest = name => postApi('/api/board-games', { name });
export const deleteBoardGameRequest = id => deleteApi(`/api/board-games/${id}`);
export const editBoardGameRequest = (name, id) => putApi(`/api/board-games/${id}`, { name });
