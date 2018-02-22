import React from 'react';
import { Card, RaisedButton } from 'material-ui';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';
import PropTypes from 'prop-types';


const fieldIsRequired = 'Pole jest wymagane';

const RegistrationForm = props => (
  <Card className="auth">
    <ValidatorForm onSubmit={props.registerButton} className="auth-form">
      <TextValidator
        floatingLabelText="Nazwa użytkownika"
        fullWidth
        name="username"
        value={props.username}
        onChange={props.handleChange}
        validators={['required']}
        errorMessages={[fieldIsRequired]}
        errorText={props.usernameError}
        onBlur={props.usernameBlur}
      />
      <TextValidator
        floatingLabelText="Hasło"
        fullWidth
        name="password"
        type="password"
        value={props.password}
        onChange={props.handleChange}
        validators={['required']}
        errorMessages={[fieldIsRequired]}
      />
      <TextValidator
        floatingLabelText="Powtórz hasło"
        fullWidth
        type="password"
        name="confirmPassword"
        onChange={props.handleChange}
        value={props.confirmPassword}
        validators={['required']}
        errorMessages={[fieldIsRequired]}
        errorText={props.confirmPasswordError}
        onBlur={props.confirmPasswordBlur}
      />

      <RaisedButton
        type="submit"
        primary
        label="ZAREJESTRUJ"
        fullWidth
        className="auth-button"
        disabled={props.submitted}
      />
    </ValidatorForm>
  </Card>
);

RegistrationForm.propTypes = {
  registerButton: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  usernameError: PropTypes.string.isRequired,
  usernameBlur: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
  confirmPasswordError: PropTypes.string.isRequired,
  confirmPasswordBlur: PropTypes.func.isRequired,
};

export default RegistrationForm;
