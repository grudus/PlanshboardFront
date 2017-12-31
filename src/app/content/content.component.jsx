import React, { Fragment } from "react"
import TopBar from "./topbar/topbar.component";
import User from "./users/users.component";
import Route from "react-router-dom/es/Route";
import Games from "./games/games.component";
import "./content.css"

const Content = () => (
    <Fragment>
        <TopBar/>
        <Route path="/user" component={User}/>
        <Route path="/games" component={Games}/>
    </Fragment>
);
export default Content;