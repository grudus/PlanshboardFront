import React, { Component, Fragment } from "react"
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import User from "./users/users.component"
import AuthRouters from "./auth/auth.routes";
import { MuiThemeProvider } from "material-ui";
import muiTheme from "./mui-theme";
import { tryResolveCurrentUser } from "./users/users.actions";
import { loginCurrentUser } from "./auth/login/login.actions";
import "./app.css"

class App extends Component {

    async componentDidMount() {
        try {
            await this.props.resolveCurrentUser();
            this.props.loginCurrentUser();
        } catch (e) {
            this.props.history.push("/auth/login")
        }
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Fragment>
                    {AuthRouters}
                    <Route path="/users" component={User}/>
                </Fragment>
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.user
});

const mapDispatchToProps = {
    resolveCurrentUser: tryResolveCurrentUser,
    loginCurrentUser: loginCurrentUser
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

