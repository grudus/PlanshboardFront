import { combineReducers } from 'redux';
import auth from '../auth/authReducer';
import user from '../content/users/userReducers';
import boardGames from '../content/board-games/boardGamesReducers';
import opponents from '../content/opponents/opponentsReducer';
import theme from '../theme/themeReducers';

const reducers = combineReducers({
  auth,
  user,
  boardGames,
  opponents,
  theme,
});

export default reducers;
