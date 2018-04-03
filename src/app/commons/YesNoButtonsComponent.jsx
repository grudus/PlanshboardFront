import React, { Fragment } from 'react';
import { FlatButton, RaisedButton } from 'material-ui';
import PropTypes from 'prop-types';
import { muiThemeable } from 'material-ui/styles/index';

const YesNoButton = ({
  onSubmit, onCancel, submitText, cancelText, isDisabled, muiTheme
}) => (
  <Fragment>
    <FlatButton
      label={cancelText}
      primary
      onClick={onCancel}
    />
    <RaisedButton
      type="submit"
      label={submitText}
      disabled={isDisabled}
      primary
      disabledBackgroundColor={muiTheme.palette.borderColor}
      onClick={onSubmit}
    />
  </Fragment>
);

YesNoButton.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string,
  cancelText: PropTypes.string,
  isDisabled: PropTypes.bool,
};

YesNoButton.defaultProps = {
  submitText: 'Stwórz',
  cancelText: 'Cofnij',
  isDisabled: false,
};

export default muiThemeable()(YesNoButton);
