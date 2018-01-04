import {
    ADD_NEW_BOARD_GAME,
    CHANGE_CURRENT_BOARD_GAME,
    GET_ALL_BOARD_GAMES,
    TRY_TO_GET_ALL_BOARD_GAMES
} from "./board-games.actions.types";
import { addBoardGameRequest, getBoardGamesRequest } from "./board-games.api";

export const changeCurrentBoardGame = (game) => ({type: CHANGE_CURRENT_BOARD_GAME, currentGame: game});

export const getAllBoardGames = () => (dispatch) => {
    dispatch(tryToGetBoardGames());

    return getBoardGamesRequest()
        .then(res => dispatch(getBoardGames(res)));
};

export const addNewBoardGame = (name) => (dispatch) => {
    return addBoardGameRequest(name)
        .then(res => dispatch(doAddNewBoardGame(name, res.id)));
};


const tryToGetBoardGames = () => ({type: TRY_TO_GET_ALL_BOARD_GAMES});
const getBoardGames = (games) => ({type: GET_ALL_BOARD_GAMES, games: games});

const doAddNewBoardGame = (name, id) => ({
    name,
    id,
    type: ADD_NEW_BOARD_GAME,
});