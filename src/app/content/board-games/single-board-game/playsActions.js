import { ADD_NEW_PLAY, GET_ALL_PLAYS, TRY_TO_ADD_PLAY, TRY_TO_GET_ALL_PLAYS } from './playsActionsTypes';
import { addNewPlayRequest, getAllPlayResultsRequest } from './playsApi';

const tryGetAllPlays = () => ({ type: TRY_TO_GET_ALL_PLAYS });
const getAllPlaysDone = plays => ({ type: GET_ALL_PLAYS, plays });

const tryAddPlay = () => ({ type: TRY_TO_ADD_PLAY });
const addPlayDone = (play, date, id, note) => ({
  type: ADD_NEW_PLAY,
  play,
  id,
  date,
  note,
});

export const addNewPlay = (boardGameId, play, date, note) => (dispatch) => {
  dispatch(tryAddPlay());

  return addNewPlayRequest(boardGameId, play, date, note)
    .then(res => dispatch(addPlayDone(play, date, res.id, note)));
};

export const getAllPlays = boardGameId => (dispatch) => {
  dispatch(tryGetAllPlays());

  return getAllPlayResultsRequest(boardGameId)
    .then(res => dispatch(getAllPlaysDone(res)));
};
