import React, { Component } from "react"
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import User from "./users/users.component"
import AuthRouters from "./auth/auth.routes";
import { MuiThemeProvider } from "material-ui";
import muiTheme from "./mui-theme";
import { tryResolveCurrentUser } from "./users/users.actions";
import { loginCurrentUser } from "./auth/auth.actions";


class App extends Component {

    async componentDidMount() {
        try {
            await this.props.resolveCurrentUser();
            this.props.loginCurrentUser();
            this.props.history.push("/")
        } catch (e) {
            this.props.history.push("/auth/login")
        }
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Switch>
                    {AuthRouters}
                    <Route path="/" component={User}/>
                </Switch>
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

