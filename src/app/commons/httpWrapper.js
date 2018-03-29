import { AUTH_HEADER } from './constants';
import { HttpError } from './httpError';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchErr = (url, options = {}) => fetch(`${backendUrl}${url}`, options)
  .then((res) => {
    if (!res.ok) { throw HttpError(res.status); }
    return res;
  });

export const api = (url, options = {}) => {
  const authOptions = { ...options };
  authOptions.headers = { ...authOptions.headers };
  authOptions.headers['Content-Type'] = 'application/json';
  authOptions.headers.Accept = 'application/json';
  authOptions.headers[AUTH_HEADER] = window.localStorage.getItem(AUTH_HEADER);
  return fetchErr(url, authOptions).then(res => (res.status !== 204 ? res.json() : res));
};

export const postApi = (url, body = {}) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
  };
  return api(url, options);
};

export const putApi = (url, body = {}) => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(body),
  };
  return api(url, options);
};
