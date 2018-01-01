import {
    ADD_NEW_BOARD_GAME, CHANGE_CURRENT_BOARD_GAME, GET_ALL_BOARD_GAMES,
    TRY_TO_GET_ALL_BOARD_GAMES
} from "./games.actions.types";
import { api } from "../../commons/http-wrapper";

export const changeCurrentBoardGame = (game) => ({type: CHANGE_CURRENT_BOARD_GAME, currentGame: game});

export const getAllBoardGames = () => (dispatch) => {
    dispatch(tryToGetBoardGames());

    return api("/api/board-games")
        .then(res => dispatch(getBoardGames(res)));
};

//todo get from server
export const addNewBoardGame = (name) => {
    return (doAddNewBoardGame(name, Math.random() * 1000));
};

const tryToGetBoardGames = () => ({type: TRY_TO_GET_ALL_BOARD_GAMES});
const getBoardGames = (games) => ({type: GET_ALL_BOARD_GAMES, games: games});

const doAddNewBoardGame = (name, id) => ({
    name,
    id,
    type: ADD_NEW_BOARD_GAME,
});