import { LOGIN, TRY_TO_LOGIN } from "./auth.actions.types";

const initialState = {
    token: "",
    isLogged: false,
    isTryingToLogin: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, token: action.token, isLogged: true, isTryingToLogin: false};
        case TRY_TO_LOGIN:
            return {...state, isTryingToLogin: true};
        default:
            return state
    }
}