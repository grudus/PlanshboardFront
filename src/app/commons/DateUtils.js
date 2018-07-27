import moment from 'moment';

const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss';
const DATE_FORMAT = 'DD.MM.YYYY';

export const utcDate = date => moment(date).format(DATE_TIME_FORMAT);

export const utcToday = () => utcDate(new Date());

export const dateFormat = date => moment(date).format(DATE_FORMAT);
