import React from "react";
import { Route } from "react-router-dom"
import Login from "./login/login.component"

const Auth = () => (<Route path={"/auth/login"} component={Login}/>);

export default Auth;