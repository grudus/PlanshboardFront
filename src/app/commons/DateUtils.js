import moment from 'moment';

const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss';
const DAY_MONTH_FORMAT = 'DD MMMM';
const DATE_FORMAT = 'DD.MM.YYYY';

export const utcDate = date => moment(date).format(DATE_TIME_FORMAT);

export const utcToday = () => utcDate(new Date());

export const dayWithMonth = date => moment(date).format(DAY_MONTH_FORMAT);

export const dateFormat = date => moment(date).format(DATE_FORMAT);
