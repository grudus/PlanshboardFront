import React, { Component } from "react"
import { Card, RaisedButton, TextField } from "material-ui";
import "./login.css"
import { connect } from "react-redux";
import { loginAction } from "../auth.actions";

class Login extends Component {

    loginButton = (e) => {
        e.preventDefault();
        console.log("Login");
        this.props.loginAction("some secret token");
        this.props.history.push("/")
    };


    render() {
        return (
            <section className="login-wrapper">
                <Card className="login-card">
                    <form onSubmit={this.loginButton} className="login-form">
                        <TextField
                            floatingLabelText="Username"
                            fullWidth={true}
                        />
                        <TextField
                            floatingLabelText="Password"
                            fullWidth={true}
                            type="password"
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
    loginAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);