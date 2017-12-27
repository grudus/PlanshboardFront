import { LOGIN } from "./auth.actions";

const initialState = {
    token: "",
    isLogged: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, token: action.token, isLogged: true};
        default:
            return state
    }
}