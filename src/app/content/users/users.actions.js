import { GET_CURRENT_USER, TRY_TO_GET_CURRENT_USER } from "./users.actions.types";
import { api } from "../../commons/http-wrapper";

const tryToGetCurrentUser = () => ({type: TRY_TO_GET_CURRENT_USER});

const saveCurrentUser = ({name, id, registerDate}) => ({
    type: GET_CURRENT_USER,
    id,
    name,
    registerDate
});

export const tryResolveCurrentUser = () => (dispatch) => {
    dispatch(tryToGetCurrentUser());

    return api("/api/users/current")
        .then(json => dispatch(saveCurrentUser(json)))
};