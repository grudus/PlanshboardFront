import React, { Component } from "react"
import { Card, RaisedButton, TextField } from "material-ui";
import "./login.css"

class Login extends Component {

    loginButton(e) {
        e.preventDefault()
        console.log("Login");
    }


    render() {
        return (
            <section className="login-wrapper">
                <Card className="login-card">
                    <form onSubmit={this.loginButton} className="login-form">
                        <TextField
                            floatingLabelText="Login"
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


export default Login;