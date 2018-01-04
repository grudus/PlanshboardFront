import React, { Fragment } from "react"
import TopBar from "./topbar/topbar.component";
import User from "./users/users.component";
import Route from "react-router-dom/es/Route";
import Games from "./games/games.component";
import "./content.css"
import { Switch, Redirect } from "react-router-dom";

const Content = () => (
    <Fragment>
        <TopBar/>
        <Switch>
            <Route path="/user" component={User}/>
            <Route path="/games" component={Games}/>
            <Route path="/" render={() => <Redirect to="/games"/>}/>
        </Switch>
    </Fragment>
);
export default Content;