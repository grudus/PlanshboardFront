import { GET_ALL_OPPONENTS } from './opponentsActionTypes';

const initialState = [];


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_OPPONENTS:
      return action.opponents;
    default:
      return state;
  }
};
