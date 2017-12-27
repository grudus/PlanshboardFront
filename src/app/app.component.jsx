import React from "react"
import { connect } from "react-redux";
import { Switch, withRouter } from "react-router-dom";
import PrivateRoute from "./private-route.component";
import User from "./users/users.component"
import AuthRouters from "./auth/auth.routes";
import { MuiThemeProvider } from "material-ui";
import muiTheme from "./mui-theme";


const App = (props) => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Switch>
                {AuthRouters}
                <PrivateRoute path="/" isLogged={props.auth.isLogged} component={User}/>
            </Switch>
        </MuiThemeProvider>
    )
};

const mapStateToProps = (state) => ({auth: state.auth});

export default withRouter(connect(mapStateToProps)(App));

