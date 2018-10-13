import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { usernameExists } from './registrationApi';
import RegistrationConfirmDialog from './RegistrationConfirmDialogComponent';
import { registerUserAction } from './registrationActions';
import RegistrationForm from './RegistrationFormComponent';

class Registration extends Component {
    state = {
      form: {
        username: '',
        password: '',
        confirmPassword: '',
        confirmPasswordError: '',
        usernameError: '',
      },
      submitted: false,
      shouldShowModal: false,
    };

    usernameExists = 'Nazwa użytkownika zajęta';

    passwordMismatch = 'Hasła muszą się zgadzać';


    registerButton = async () => {
      const { password, confirmPassword, username } = this.state.form;
      const { exists } = await usernameExists(username);
      this.updateError(exists, this.usernameExists, 'usernameError');
      this.updateError(password !== confirmPassword, this.passwordMismatch, 'confirmPasswordError');

      if (exists || password !== confirmPassword) { return; }

      try {
        this.setState({ submitted: true });
        await this.props.registerUserAction(username, password);
        this.setState({ shouldShowModal: true });
      } catch (e) {
        this.setState({ submitted: false });
      }
    };

    handleChange = (event) => {
      const { form } = this.state;
      form[event.target.name] = event.target.value;
      this.setState({ form });
    };

    usernameBlur = async () => {
      const { exists } = await usernameExists(this.state.form.username);
      this.updateError(exists, this.usernameExists, 'usernameError');
    };

    confirmPasswordBlur = () => {
      const { password, confirmPassword } = this.state.form;
      this.updateError(password !== confirmPassword, this.passwordMismatch, 'confirmPasswordError');
    };

    closePopup = () => {
      this.setState({ shouldShowModal: false });
      this.props.history.push('/auth/login');
    };

    updateError(isError, errorText, errorProperty) {
      const error = isError ? errorText : '';
      this.setState((prev) => {
        const prevForm = { ...prev.form };
        prevForm[errorProperty] = error;
        return { form: prevForm };
      });
    }

    render() {
      const { form, submitted } = this.state;
      return (
        <section className="auth-wrapper">
          <h1 className="auth-header">Załóż konto</h1>
          <RegistrationForm
            registerButton={this.registerButton}
            username={form.username}
            handleChange={this.handleChange}
            usernameError={form.usernameError}
            usernameBlur={this.usernameBlur}
            password={form.password}
            confirmPassword={form.confirmPassword}
            submitted={submitted}
            confirmPasswordBlur={this.confirmPasswordBlur}
            confirmPasswordError={form.confirmPasswordError}
          />
          <p>Masz już konto?</p>
          <Link to="/auth/login">Zaloguj się</Link>
          <RegistrationConfirmDialog
            closePopup={this.closePopup}
            shouldShowModal={this.state.shouldShowModal}
          />
        </section>
      );
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  registerUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
