import React, { Fragment } from "react";
import { Route } from "react-router-dom"
import Login from "./login/login.component"
import Registration from "./registration/registration.component";

const AuthRouters = (
    <Fragment>
        <Route path="/auth/login" component={Login}/>
        <Route path="/auth/registration" component={Registration}/>
    </Fragment>
);

export default AuthRouters;