import { LOGIN, LOGIN_CURRENT_USER, LOGOUT, TRY_TO_LOGIN } from "../auth.actions.types";
import { AUTH_HEADER } from "../../commons/constants";
import { fetchErr } from "../../commons/http-wrapper";

export const loginAction = (token) => ({
    type: LOGIN,
    token: token
});

export const loginCurrentUser = () => {
    const token = window.localStorage.getItem(AUTH_HEADER);
    return {type: LOGIN_CURRENT_USER, token}
};

export const tryToLoginAction = (username, password) => (dispatch) => {
    dispatch(tryToLogin());

    return fetchErr(`/api/auth/login`, {
        method: 'POST',
        body: searchParams({username: username, password: password}),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    }).then(response => {
        window.localStorage.setItem(AUTH_HEADER, response.headers.get(AUTH_HEADER));
        dispatch(loginAction(response.headers.get(AUTH_HEADER)));
    })
};

const tryToLogin = () => ({
    type: TRY_TO_LOGIN
});

const searchParams = (params) => Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
}).join('&');


export const logoutAction = () => (dispatch) => {
    window.localStorage.removeItem(AUTH_HEADER);
    dispatch(logout());
};

const logout = () => ({type: LOGOUT});