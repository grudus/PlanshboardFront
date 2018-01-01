import { CHANGE_CURRENT_GAME, GET_ALL_GAMES, TRY_TO_GET_ALL_GAMES } from "./games.actions.types";
import { api } from "../../commons/http-wrapper";

export const changeCurrentGame = (game) => ({type: CHANGE_CURRENT_GAME, currentGame: game});

export const getAllGames = () => (dispatch) => {
    console.log("GET ALL GAMES ACTIOn");
    dispatch(tryToGetGames());

    return api("/api/board-games")
        .then(res => dispatch(getGames(res)));
};

const tryToGetGames = () => ({type: TRY_TO_GET_ALL_GAMES});
const getGames = (games) => ({type: GET_ALL_GAMES, games: games});