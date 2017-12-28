import React, { Component } from "react"
import { Card, RaisedButton } from "material-ui";
import { Link } from "react-router-dom";
import { TextValidator } from "react-material-ui-form-validator";
import { ValidatorForm } from 'react-form-validator-core';
import { usernameExists } from "./registration.api";
import { connect } from "react-redux";
import RegistrationConfirmDialog from "./registration.confirm-dialog.component";
import { registerUserAction } from "./registration.actions";

class Registration extends Component {
    state = {
        form: {
            username: "",
            password: "",
            confirmPassword: "",
            usernameError: ""
        },
        submitted: false,
        shouldShowModal: false
    };

    fieldIsRequired = "Pole jest wymagane";
    usernameExists = "Nazwa użytkownika zajęta";
    passwordMismatch = "Hasła muszą się zgadzać";


    handleChange = (event) => {
        const {form} = this.state;
        form[event.target.name] = event.target.value;
        this.setState({form});
    };

    registerButton = async () => {
        const {password, confirmPassword, username} = this.state.form;
        const {exists} = await usernameExists(username);
        this.setErrorIfUsernameExists(exists);

        if (exists || password !== confirmPassword) {
            return;
        }

        try {
            await this.props.registerUserAction(username, password);
            this.setState({shouldShowModal: true})
        } catch (e) {
            console.log("ERROR");
            console.log(e);
        }
    };

    usernameBlur = async () => {
        const {exists} = await usernameExists(this.state.form.username);
        this.setErrorIfUsernameExists(exists);
    };

    setErrorIfUsernameExists(exists) {
        const error = exists ? this.usernameExists : "";
        this.setState(prev => ({form: {...prev.form, usernameError: error}}))
    }

    closePopup = () => {
        this.setState({shouldShowModal: false});
        this.props.history.push("/auth/login")
    };

    render() {
        return (
            <section className="auth-wrapper">
                <h1 className="auth-header">Załóż konto</h1>
                <Card className="auth">
                    <ValidatorForm onSubmit={this.registerButton} className="auth-form" ref="form">
                        <TextValidator
                            floatingLabelText="Nazwa użytkownika"
                            fullWidth={true}
                            name="username"
                            value={this.state.form.username}
                            onChange={this.handleChange}
                            validators={['required']}
                            errorMessages={[this.fieldIsRequired]}
                            errorText={this.state.form.usernameError}
                            onBlur={this.usernameBlur}
                        />
                        <TextValidator
                            floatingLabelText="Hasło"
                            fullWidth={true}
                            name="password"
                            type="password"
                            value={this.state.form.password}
                            onChange={this.handleChange}
                            validators={['required']}
                            errorMessages={[this.fieldIsRequired]}
                        />
                        <TextValidator
                            floatingLabelText="Powtórz hasło"
                            fullWidth={true}
                            type="password"
                            name="confirmPassword"
                            onChange={this.handleChange}
                            value={this.state.form.confirmPassword}
                            validators={["required"]}
                            errorMessages={[this.fieldIsRequired]}
                        />

                        <RaisedButton type="submit" primary={true} label="ZAREJESTRUJ" fullWidth={true}
                            /*onClick={this.registerButton}*/ className="auth-button"
                                      disabled={this.state.submitted}/>
                    </ValidatorForm>
                </Card>
                <p>Masz już konto?</p>
                <Link to="/auth/login">Zaloguj się</Link>
                <RegistrationConfirmDialog
                    closePopup={this.closePopup}
                    shouldShowModal={this.state.shouldShowModal}
                />
            </section>
        )
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {
    registerUserAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);