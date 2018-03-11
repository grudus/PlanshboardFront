import { GET_ALL_OPPONENTS, TRY_TO_GET_ALL_OPPONENTS } from './opponentsActionTypes';
import { getAllOpponentsRequest } from './opponentsApi';

const tryToGetAllOpponents = () => ({ type: TRY_TO_GET_ALL_OPPONENTS });

const getAllOpponentsDone = opponents => ({ type: GET_ALL_OPPONENTS, opponents });

export const getAllOpponents = () => (dispatch) => {
  dispatch(tryToGetAllOpponents());

  return getAllOpponentsRequest()
    .then(res => dispatch(getAllOpponentsDone(res)));
};
