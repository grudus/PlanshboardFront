import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'material-ui';
import moment from 'moment';
import 'moment/locale/pl';


const DateDialogComponent = (props) => {
  // why, materialui, why?
  const onChange = (_null, date) => props.onDateChange(moment(date).format('YYYY-MM-DDTHH:mm:ss'));

  return (
    <DatePicker
      formatDate={date => moment(date).format('DD MMMM')}
      cancelLabel="Cofnij"
      okLabel="Ok"
      locale="pl"
      onChange={onChange}
      DateTimeFormat={Intl.DateTimeFormat}
      defaultDate={new Date()}
    />
  );
};

DateDialogComponent.propTypes = {
  onDateChange: PropTypes.func.isRequired,
};

export default DateDialogComponent;
