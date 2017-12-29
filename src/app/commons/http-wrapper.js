import { AUTH_HEADER } from "./constants";
import { HttpError } from "./http-error";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchErr = (url, options = {}) => fetch(`${backendUrl}${url}`, options)
    .then(res => {
        console.log(res);
        if (!res.ok)
            throw HttpError(res.status);
        return res
    });

export const api = (url, options = {}) => {
    const authOptions = {...options};
    authOptions.headers = {...authOptions.headers};
    authOptions.headers['Content-Type'] = 'application/json';
    authOptions.headers['Accept'] = 'application/json';
    authOptions.headers[AUTH_HEADER] = window.localStorage.getItem(AUTH_HEADER);
    return fetchErr(url, authOptions).then(res => res.json())
};