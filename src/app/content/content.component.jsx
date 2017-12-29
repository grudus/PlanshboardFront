import React, { Fragment } from "react"
import TopBar from "./topbar/topbar.component";
import User from "./users/users.component";
import Route from "react-router-dom/es/Route";

const Content = () => (
    <Fragment>
        <TopBar/>
        <Route path="/user" component={User}/>
    </Fragment>
);
export default Content;