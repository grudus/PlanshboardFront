import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { logoutAction } from '../../auth/login/login.actions';
import './topbar.css';
import tabs from '../tabs';
import logoutIcon from '../res/logout.png';
import TopBarItem from './topbar.item.component';

class TopBar extends Component {
    propTypes = {
      currentPath: PropTypes.string.isRequired,
    };

    logout = () => {
      this.props.logoutAction();
    };

    render() {
      const items = tabs.map(tab =>
        (<TopBarItem
          key={tab.path}
          icon={tab.icon}
          label={tab.label}
          path={tab.path}
          isCurrent={this.props.currentPath === tab.path}
        />));

      return (
        <section className="top-bar" style={{ background: this.props.muiTheme.palette.primary1Color }}>
          <div className="left-tabs">
            {items}
          </div>
          <div className="right-tabs">
            <TopBarItem label="Wyloguj" icon={logoutIcon} path="/auth/login" onClick={this.logout} />
          </div>
        </section>
      );
    }
}

const mapDispatchToProps = {
  logoutAction,
};

export default compose(
  connect(() => ({}), mapDispatchToProps),
  muiThemeable(),
)(TopBar);
