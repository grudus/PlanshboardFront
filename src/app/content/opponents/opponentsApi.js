import { api } from '../../commons/httpWrapper';

export const getAllOpponentsRequest = () => api('/api/opponents');
