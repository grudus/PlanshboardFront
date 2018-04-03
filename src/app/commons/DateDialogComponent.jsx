import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'material-ui';
import { muiThemeable } from 'material-ui/styles/index';
import 'moment/locale/pl';
import { dateFormat, utcDate } from './DateUtils';


const DateDialogComponent = (props) => {
  // why, materialui, why?
  const onChange = (_null, date) => props.onDateChange(utcDate(date));

  return (
    <DatePicker
      formatDate={date => dateFormat(date)}
      cancelLabel="Cofnij"
      okLabel="Ok"
      locale="pl"
      id="playdate"
      onChange={onChange}
      style={{ width: '100%' }}
      textFieldStyle={{ width: '100%' }}
      DateTimeFormat={Intl.DateTimeFormat}
      defaultDate={new Date()}
    />
  );
};

DateDialogComponent.propTypes = {
  onDateChange: PropTypes.func.isRequired,
};

export default muiThemeable()(DateDialogComponent);
