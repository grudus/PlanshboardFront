import { AUTH_HEADER } from "./constants";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchErr = (url, options = {}) => fetch(`${backendUrl}${url}`, options)
    .then(res => {
        console.log(res);
        if (!res.ok)
            throw Error(`Response status: ${res.status}`);
        return res
    });

export const api = (url, options = {}) => {
    const authOptions = {...options};
    authOptions[AUTH_HEADER] = window.localStorage[AUTH_HEADER];
    return fetchErr(url, authOptions);
};