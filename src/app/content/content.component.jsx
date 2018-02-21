import React, {Component} from "react"
import Route from "react-router-dom/es/Route";
import Games from "./games/games.component";
import Landing from "./landing/landing.component"
import "./content.css"
import {Switch} from "react-router-dom";

class Content extends Component {

    render() {
        return (
            <Switch>
                <Route path="/games" component={Games}/>
                <Route path="/" component={Landing}/>
            </Switch>
        )
    }
}

export default Content;