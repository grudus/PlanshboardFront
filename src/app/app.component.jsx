import React, { Component } from "react"
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { MuiThemeProvider } from "material-ui";
import muiTheme from "./mui-theme";
import { tryResolveCurrentUser } from "./content/users/users.actions";
import { loginCurrentUser } from "./auth/login/login.actions";
import "./app.css"
import Content from "./content/content.component";
import Login from "./auth/login/login.component";
import Registration from "./auth/registration/registration.component";

class App extends Component {

    async componentDidMount() {
        try {
            await this.props.resolveCurrentUser();
            this.props.loginCurrentUser();
        } catch (e) {
            this.props.history.push("/auth/login");
        }
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Switch>
                    <Route exact path="/auth/login" component={Login}/>
                    <Route exact path="/auth/registration" component={Registration}/>
                    <Route path="/" component={Content}/>
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

