import React, { Component } from "react"
import { Card, RaisedButton, TextField } from "material-ui";
import "./login.css"
import { connect } from "react-redux";
import { tryToLoginAction } from "../auth.actions";

class Login extends Component {
    state = {username: "", password: ""};

    updateUsername = e => {
        this.setState({username: e.target.value})
    };

    updatePassword = e => {
        this.setState({password: e.target.value})
    };

    loginButton = async (e) => {
        e.preventDefault();
        try {
            await this.props.tryToLoginAction(this.state.username, this.state.password);
            this.props.history.push("/")
        } catch (exc) {
            console.error(exc)
            this.setState({username: "", password: ""})
        }
    };


    render() {
        return (
            <section className="login-wrapper">
                <Card className="login-card">
                    <form onSubmit={this.loginButton} className="login-form">
                        <TextField
                            floatingLabelText="Username"
                            fullWidth={true}
                            value={this.state.username}
                            onChange={this.updateUsername}
                        />
                        <TextField
                            floatingLabelText="Password"
                            fullWidth={true}
                            type="password"
                            onChange={this.updatePassword}
                            value={this.state.password}
                        />
                        <RaisedButton type="submit" primary={true} label="LOG IN" fullWidth={true}
                                      onClick={this.loginButton} className="login-button"/>
                    </form>
                </Card>
            </section>
        )
    }
}

const mapStateToProps = (state) => (
    {auth: state.auth}
);

const mapDispatchToProps = {
    tryToLoginAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);