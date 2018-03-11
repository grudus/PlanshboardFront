import { combineReducers } from 'redux';
import auth from '../auth/authReducer';
import user from '../content/users/userReducers';
import boardGames from '../content/board-games/boardGamesReducers';
import opponents from '../content/opponents/opponentsReducer';

const reducers = combineReducers({
  auth,
  user,
  boardGames,
  opponents,
});

export default reducers;
