import { GET_STATS } from './statsActionsTypes';

const initialState = {
  allPlaysCount: 0,
  boardGamesCount: 0,
  playsPerBoardGameCount: [],
  playPositionsPerOpponentCount: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STATS:
      return action.stats;
    default:
      return state;
  }
};
