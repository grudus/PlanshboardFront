import { combineReducers } from 'redux';
import auth from '../auth/auth.reducer';
import user from '../content/users/users.reducers';
import boardGames from '../content/board-games/board-games.reducers';

const reducers = combineReducers({
  auth,
  user,
  boardGames,
});

export default reducers;
