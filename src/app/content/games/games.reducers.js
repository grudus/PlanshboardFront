import { CHANGE_CURRENT_GAME, GET_ALL_GAMES } from "./games.actions.types";

const mockGames = [
    {id: 1, name: "Agricola"},
    {id: 2, name: "Pędzące żółwie"},
    {id: 3, name: "Osadnicy"}
];

const initialState = {
    allGames: mockGames,
    currentGame: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_GAME:
            return {...state, currentGame: action.currentGame};
        case GET_ALL_GAMES:
            return {...state, allGames: action.games};
        default:
            return state;
    }
}