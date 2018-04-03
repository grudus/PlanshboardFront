import React, { Fragment } from 'react';
import { FlatButton, RaisedButton } from 'material-ui';
import PropTypes from 'prop-types';

const YesNoButton = ({
  onSubmit, onCancel, submitText, cancelText, isDisabled,
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

export default YesNoButton;
