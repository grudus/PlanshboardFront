import { combineReducers } from 'redux';
import auth from '../auth/authReducer';
import user from '../content/users/userReducers';
import boardGames from '../content/board-games/boardGamesReducers';

const reducers = combineReducers({
  auth,
  user,
  boardGames,
});

export default reducers;
