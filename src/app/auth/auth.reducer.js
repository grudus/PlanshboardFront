import { LOGIN, LOGIN_CURRENT_USER, TRY_TO_LOGIN } from "./auth.actions.types";

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
        case LOGIN_CURRENT_USER:
            return {...state, isTryingToLogin: false, isLogged: true, token: action.token};
        default:
            return state
    }
}