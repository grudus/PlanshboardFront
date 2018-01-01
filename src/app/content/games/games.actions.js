import { CHANGE_CURRENT_GAME } from "./games.actions.types";

export const changeCurrentGame = (game) => ({type: CHANGE_CURRENT_GAME, currentGame: game});