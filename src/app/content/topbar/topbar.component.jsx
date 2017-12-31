import React, { Component } from "react"

import { AppBar, FlatButton, Tab, Tabs, ToolbarGroup } from "material-ui";
import { Link } from "react-router-dom";
import { logoutAction } from "../../auth/login/login.actions";
import { connect } from "react-redux";
import "./topbar.css"

class TopBar extends Component {

    logout = () => {
        this.props.logoutAction();
    };

    render() {
        const logoutButton = <FlatButton label="Wyloguj" onClick={this.logout}
                                         containerElement={<Link to="/auth/login"/>}/>;

        return (<AppBar iconElementLeft={
            <ToolbarGroup>
                <Tabs>
                    <Tab className="tab" label="Gry"
                         containerElement={<Link to="/games"/>}
                    />
                    <Tab className="tab" label="Statystyki"
                         containerElement={<Link to="/stats"/>}
                    />
                    <Tab className="tab" label="Użytkownik"
                         containerElement={<Link to="/user"/>}
                    />
                </Tabs>
            </ToolbarGroup>
        }
                        iconElementRight={logoutButton}
                        iconStyleLeft={{marginTop: '0', marginLeft: 0}}
        >
        </AppBar>)
    }
}

const mapDispatchToProps = {
    logoutAction
};

export default connect(() => ({}), mapDispatchToProps)(TopBar);