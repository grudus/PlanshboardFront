import { api, postApi } from '../../commons/httpWrapper';

export const usernameExists = username => api(`/api/auth/register/exists?username=${username}`);

export const registerUser = (username, password) => postApi('/api/auth/register', { username, password });
