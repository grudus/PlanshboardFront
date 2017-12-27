import {LOGIN} from "./auth.actions.types";

export const loginAction = (token) => ({
    type:  LOGIN,
    token: token
});