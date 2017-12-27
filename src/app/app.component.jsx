import React from "react"
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import Login from "./auth/login/login.component";
import PrivateRoute from "./private-route.component";
import User from "./users/users.component"

const App = (props) => {
    return (
        <Switch>
            <Route path="/auth/login" component={Login}/>
            <PrivateRoute path="/" isLogged={props.auth.isLogged} component={User}/>
        </Switch>
    )
};

const mapStateToProps = (state) => ({auth: state.auth});

export default withRouter(connect(mapStateToProps)(App));

