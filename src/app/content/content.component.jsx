import React, {Component, Fragment} from "react"
import User from "./users/users.component";
import Route from "react-router-dom/es/Route";
import Games from "./games/games.component";
import Landing from "./landing/landing.component"
import "./content.css"
import {Switch} from "react-router-dom";

class Content extends Component {

    render() {
        return (
            <Fragment>
                {/*<TopBar pathName={this.props.location.pathname}/>*/}
                <div>
                    <Switch>
                        <Route path="/user" component={User}/>
                        <Route path="/games/:gameId?" component={Games}/>
                        <Route path="/" component={Landing}/>
                    </Switch>
                </div>
            </Fragment>
        )
    }
}

export default Content;