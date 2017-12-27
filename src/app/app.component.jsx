import React from "react"
import { connect } from "react-redux";
import { Switch, withRouter } from "react-router-dom";
import PrivateRoute from "./private-route.component";
import User from "./users/users.component"
import AuthRouters from "./auth/auth.routes";

const App = (props) => {
    return (
        <Switch>
            {AuthRouters}
            <PrivateRoute path="/" isLogged={props.auth.isLogged} component={User}/>
        </Switch>
    )
};

const mapStateToProps = (state) => ({auth: state.auth});

export default withRouter(connect(mapStateToProps)(App));

