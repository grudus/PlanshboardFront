import React, {Component} from "react"
import PropTypes from "prop-types";

import {AppBar, FlatButton, Tab, Tabs, ToolbarGroup} from "material-ui";
import {Link} from "react-router-dom";
import {logoutAction} from "../../auth/login/login.actions";
import {connect} from "react-redux";
import "./topbar.css"
import tabs from "../tabs"

class TopBar extends Component {
    static propTypes = {
        pathName: PropTypes.string,
    };

    logout = () => {
        this.props.logoutAction();
    };

    render() {
        const logoutButton = (<FlatButton label="Wyloguj" onClick={this.logout}
                                          containerElement={<Link to="/auth/login"/>}/>);

        const currentTabId = tabs.findIndex(tab => tab.path === this.props.pathName);

        return (<AppBar className="app-bar" iconElementLeft={
            <ToolbarGroup>
                <Tabs value={currentTabId}>
                    {tabs.map((tab, index) =>
                        <Tab className="tab" label={tab.label} value={index} key={index}
                             containerElement={<Link to={tab.path}/>}/>
                    )}
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