import {
  ADD_NEW_BOARD_GAME, CHANGE_CURRENT_BOARD_GAME, DELETE_BOARD_GAME,
  GET_ALL_BOARD_GAMES, RENAME_BOARD_GAME,
} from './boardGamesActionsTypes';
import { ADD_NEW_PLAY, DELETE_PLAY, GET_ALL_PLAYS } from './single-board-game/playsActionsTypes';

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
      return { ...state, allGames: games };
    }
    case RENAME_BOARD_GAME: {
      const games = state.allGames.map(game => ((game.id === action.id)
        ? ({ ...game, name: action.newName })
        : game));
      return { ...state, allGames: games };
    }
    case GET_ALL_PLAYS: {
      const { currentGame } = state;
      return { ...state, currentGame: { ...currentGame, plays: action.plays } };
    }
    case ADD_NEW_PLAY: {
      const { currentGame } = state;
      const {
        play, id, date, note,
      } = action;
      return {
        ...state,
        currentGame: {
          ...currentGame,
          plays: [...currentGame.plays, {
            results: play, id, date, note,
          }],
        },
      };
    }
    case DELETE_PLAY: {
      const { currentGame } = state;
      const newPlays = currentGame.plays.filter(play => play.id !== action.id);
      return { ...state, currentGame: { ...currentGame, plays: newPlays } };
    }
    default:
      return state;
  }
};
