import { LOGIN, TRY_TO_LOGIN } from "./auth.actions.types";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const loginAction = (token) => ({
    type: LOGIN,
    token: token
});

export const tryToLoginAction = (username, password) => (dispatch) => {
    dispatch(tryToLogin());

    return fetch(`${backendUrl}/api/auth/login`, {
        method: 'POST',
        body: searchParams({username: username, password: password}),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    }).then(response => {
        if (response.ok)
            dispatch(loginAction(response.headers.get("X-AUTH-TOKEN")));
        else throw Error()
    })
};

const tryToLogin = () => ({
    type: TRY_TO_LOGIN
});

const searchParams = (params) => Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
}).join('&');
