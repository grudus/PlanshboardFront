import {
  ADD_NEW_BOARD_GAME,
  CHANGE_CURRENT_BOARD_GAME, DELETE_BOARD_GAME,
  GET_ALL_BOARD_GAMES,
  TRY_TO_GET_ALL_BOARD_GAMES,
} from './boardGamesActionsTypes';
import { addBoardGameRequest, deleteBoardGameRequest, getBoardGamesRequest } from './boardGamesApi';

const tryToGetBoardGames = () => ({ type: TRY_TO_GET_ALL_BOARD_GAMES });
const getAllBoardGamesDone = games => ({ type: GET_ALL_BOARD_GAMES, games });
const addNewBoardGameDone = (name, id) => ({
  name,
  id,
  type: ADD_NEW_BOARD_GAME,
});

const deleteBoardGameDone = id => ({
  type: DELETE_BOARD_GAME,
  id,
});

export const changeCurrentBoardGame = game =>
  ({ type: CHANGE_CURRENT_BOARD_GAME, currentGame: game });

export const deleteBoardGame = id => dispatch => deleteBoardGameRequest(id)
  .then(() => dispatch(deleteBoardGameDone(id)));

export const getAllBoardGames = () => (dispatch) => {
  dispatch(tryToGetBoardGames());

  return getBoardGamesRequest()
    .then(res => dispatch(getAllBoardGamesDone(res)));
};

export const addNewBoardGame = name => dispatch => addBoardGameRequest(name)
  .then(res => dispatch(addNewBoardGameDone(name, res.id)));

