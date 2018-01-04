import { ADD_NEW_BOARD_GAME, CHANGE_CURRENT_BOARD_GAME, GET_ALL_BOARD_GAMES } from "./board-games.actions.types";

const initialState = {
    allGames: [],
    currentGame: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_BOARD_GAME:
            return {...state, currentGame: action.currentGame};
        case GET_ALL_BOARD_GAMES:
            return {...state, allGames: action.games};
        case ADD_NEW_BOARD_GAME:
            return {...state, allGames: [...state.allGames, {name: action.name, id: action.id}]};
        default:
            return state;
    }
}