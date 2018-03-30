import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, RaisedButton, TextField } from 'material-ui';
import { setValueWhenAutofilled } from '../../commons/BrowserUtils';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.textInputRef = null;
    this.passwordInputRef = null;
  }

  componentDidMount() {
    setValueWhenAutofilled(this.textInputRef);
    setValueWhenAutofilled(this.passwordInputRef);
  }


  render() {
    return (
      <Card className="auth">
        <form onSubmit={this.props.loginButton} className="auth-form">
          <TextField
            ref={(ref) => {
                            this.textInputRef = ref;
                        }}
            floatingLabelText="Nazwa użytkownika"
            fullWidth
            name="username"
            value={this.props.username}
            onChange={this.props.handleChange}
          />
          <TextField
            ref={(ref) => {
                            this.passwordInputRef = ref;
                        }}
            floatingLabelText="Hasło"
            fullWidth
            type="password"
            name="password"
            value={this.props.password}
            onChange={this.props.handleChange}
            errorText={this.props.error}
          />
          <RaisedButton
            type="submit"
            primary
            label="ZALOGUJ"
            fullWidth
            onClick={this.props.loginButton}
            className="auth-button"
          />
        </form>
      </Card>
    );
  }
}

LoginForm.propTypes = {
  loginButton: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default LoginForm;
