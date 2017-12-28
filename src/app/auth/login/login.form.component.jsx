import React from "react"
import PropTypes from "prop-types";
import { Card, RaisedButton, TextField } from "material-ui";

const LoginForm = (props) => (
    <Card className="auth">
        <form onSubmit={props.loginButton} className="auth-form">
            <TextField
                floatingLabelText="Nazwa użytkownika"
                fullWidth={true}
                name="username"
                value={props.username}
                onChange={props.handleChange}
            />
            <TextField
                floatingLabelText="Hasło"
                fullWidth={true}
                type="password"
                name="password"
                value={props.password}
                onChange={props.handleChange}
            />
            <RaisedButton type="submit" primary={true} label="ZALOGUJ" fullWidth={true}
                          onClick={props.loginButton} className="auth-button"/>
        </form>
    </Card>
);

LoginForm.propTypes = {
    loginButton: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
};

export default LoginForm;