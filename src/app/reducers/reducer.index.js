import { combineReducers } from "redux"
import auth from "../auth/auth.reducer"
import user from "../content/users/users.reducers"
import games from "../content/games/games.reducers"

const reducers = combineReducers(
    {
        auth,
        user,
        games,
    }
);

export default reducers;