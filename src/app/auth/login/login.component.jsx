import React, { Component } from "react"
import "./login.css"
import { connect } from "react-redux";
import { tryToLoginAction } from "./login.actions";
import LoginForm from "./login.form.component";
import { Link } from "react-router-dom";

class Login extends Component {
    state = {
        form: {
            username: "",
            password: ""
        }
    };

    handleChange = (event) => {
        const {form} = this.state;
        form[event.target.name] = event.target.value;
        this.setState({form});
    };

    loginButton = async (e) => {
        e.preventDefault();
        const {username, password} = this.state.form;
        try {
            await this.props.tryToLoginAction(username, password);
            this.props.history.push("/")
        } catch (exc) {
            this.setState({form: {username: "", password: ""}})
        }
    };


    render() {
        return (
            <section className="auth-wrapper">
                <h1 className="auth-header">Witaj ponownie</h1>
                <LoginForm loginButton={this.loginButton} username={this.state.form.username}
                           password={this.state.form.password}
                           handleChange={this.handleChange}/>
                <p>Nie masz jeszcze konta?</p>
                <Link to="/auth/registration">Zarejestruj się</Link>
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