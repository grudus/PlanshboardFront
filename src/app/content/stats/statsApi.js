import { api } from '../../commons/httpWrapper';

export const getStatsRequest = () => api('/api/stats');
