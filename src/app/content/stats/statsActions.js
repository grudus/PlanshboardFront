import { GET_STATS, TRY_TO_GET_STATS } from './statsActionsTypes';
import { getStatsRequest } from './statsApi';

const tryToGetStats = () => ({ type: TRY_TO_GET_STATS });
const getStatsDone = stats => ({ type: GET_STATS, stats });

export const getStats = () => (dispatch) => {
  dispatch(tryToGetStats());

  return getStatsRequest()
    .then(stats => dispatch(getStatsDone(stats)));
};
