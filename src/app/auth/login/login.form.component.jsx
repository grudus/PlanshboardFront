import React from "react"
import { Card, RaisedButton, TextField } from "material-ui";

const LoginForm = (props) => (
    <Card className="login-card">
        <form onSubmit={props.loginButton} className="login-form">
            <TextField
                floatingLabelText="Username"
                fullWidth={true}
                value={props.username}
                onChange={props.updateUsername}
            />
            <TextField
                floatingLabelText="Password"
                fullWidth={true}
                type="password"
                value={props.password}
                onChange={props.updatePassword}
            />
            <RaisedButton type="submit" primary={true} label="LOG IN" fullWidth={true}
                          onClick={props.loginButton} className="login-button"/>
        </form>
    </Card>
);

export default LoginForm;