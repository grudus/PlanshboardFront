import {
  ADD_NEW_BOARD_GAME, CHANGE_CURRENT_BOARD_GAME, DELETE_BOARD_GAME,
  GET_ALL_BOARD_GAMES,
} from './board-games.actions.types';

const initialState = {
  allGames: [],
  currentGame: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_BOARD_GAME:
      return { ...state, currentGame: action.currentGame };
    case GET_ALL_BOARD_GAMES:
      return { ...state, allGames: action.games };
    case ADD_NEW_BOARD_GAME:
      return { ...state, allGames: [...state.allGames, { name: action.name, id: action.id }] };
    case DELETE_BOARD_GAME: {
      const games = state.allGames.filter(game => game.id !== action.id);
      const current = (state.currentGame.id === action.id) ? games[0] : state.currentGame;
      return { ...state, allGames: games, currentGame: current };
    }
    default:
      return state;
  }
};
