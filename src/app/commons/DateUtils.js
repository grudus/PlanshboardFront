import moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss';
const DAY_MONTH_FORMAT = 'DD MMMM';

export const utcDate = date => moment(date).format(DATE_FORMAT);

export const utcToday = () => utcDate(new Date());

export const dayWithMonth = date => moment(date).format(DAY_MONTH_FORMAT);
