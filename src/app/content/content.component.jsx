import React, { Fragment } from "react"
import TopBar from "./topbar/topbar.component";
import User from "./users/users.component";
import Route from "react-router-dom/es/Route";

// TODO resolve 'content' problem
const Content = () => (
    <Fragment>
        <TopBar/>
        <Route path="/users" component={User}/>
    </Fragment>
);
export default Content;