import React, { Component } from "react"

import { AppBar, FlatButton, Tab, Tabs, ToolbarGroup } from "material-ui";
import { Link } from "react-router-dom";
import { logoutAction } from "../../auth/login/login.actions";
import { connect } from "react-redux";

class TopBar extends Component {

    logout = () => {
        this.props.logoutAction();
    };

    render() {
        const logoutButton = <FlatButton label="LOGOUT" onClick={this.logout} containerElement={<Link to="/auth/login"/>}/>;

        return (<AppBar iconElementLeft={
            <ToolbarGroup>
                <Tabs>
                    <Tab style={{color: 'white', padding: '8px 48px'}} label="Użytkownik"
                         containerElement={<Link to="/users"/>}>
                    </Tab>
                    <Tab style={{color: 'white', padding: '8px 48px'}} label="Gry"
                         containerElement={<Link to="/games"/>}
                    />
                    <Tab style={{color: 'white', padding: '8px 48px'}} label="Statystyki"
                         containerElement={<Link to="/stats"/>}/>
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