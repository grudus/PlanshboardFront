import React, { Component } from "react"
import "./login.css"
import { connect } from "react-redux";
import { tryToLoginAction } from "../auth.actions";
import LoginForm from "./login.form.component";

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
            this.setState({username: "", password: ""})
        }
    };


    render() {
        return (
            <section className="login-wrapper">
                <h1 className="login-header">Welcome again</h1>
                <LoginForm loginButton={this.loginButton} username={this.state.username} password={this.state.password}
                           updatePassword={this.updatePassword} updateUsername={this.updateUsername}/>
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