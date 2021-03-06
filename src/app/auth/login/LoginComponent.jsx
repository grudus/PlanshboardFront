import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './login.scss';
import LoginForm from './LoginFormComponent';
import { tryToLoginAction } from './loginActions';

class Login extends Component {
    state = {
      form: {
        username: '',
        password: '',
      },
      error: '',
    };

    handleChange = (event) => {
      const { form } = this.state;
      form[event.target.name] = event.target.value;
      this.setState({ form });

      if (this.state.error) {
        this.setState({ error: '' });
      }
    };

    loginButton = async (e) => {
      e.preventDefault();
      const { username, password } = this.state.form;
      try {
        await this.props.tryToLoginAction(username, password);
        this.props.history.push('/');
      } catch (exc) {
        if (exc.code === 403) {
          this.setState(state => (
            {
              form: { password: '', username: state.form.username },
              error: 'Wprowadzono niepoprawne dane',
            }));
        }
      }
    };


    render() {
      return (
        <section className="auth-wrapper">
          <h1 className="auth-header">Witaj ponownie</h1>
          <LoginForm
            loginButton={this.loginButton}
            username={this.state.form.username}
            password={this.state.form.password}
            handleChange={this.handleChange}
            error={this.state.error}
          />
          <p>Nie masz jeszcze konta?</p>
          <Link to="/auth/registration">Zarejestruj się</Link>
        </section>
      );
    }
}

const mapStateToProps = state => (
  { auth: state.auth }
);

const mapDispatchToProps = {
  tryToLoginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
