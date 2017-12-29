import { combineReducers } from "redux"
import auth from "../auth/auth.reducer"
import user from "../content/users/users.reducers"

const reducers = combineReducers(
    {
        auth,
        user
    }
);

export default reducers;