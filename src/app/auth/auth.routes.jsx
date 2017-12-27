import React from "react";
import { Route } from "react-router-dom"
import Login from "./login/login.component"

const AuthRouters = (<Route path={"/auth/login"} component={Login}/>);

export default AuthRouters;