import { api } from "../../commons/http-wrapper";

export const usernameExists = (username) => api(`/api/auth/register/exists?username=${username}`);

export const registerUser = (username, password) => api("/api/auth/register", {
    method: 'POST',
    body: JSON.stringify({username: username, password: password})
});