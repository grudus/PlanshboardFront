import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutAction } from '../../auth/login/loginActions';
import './topbar.css';
import tabs from '../Tabs';
import logoutIcon from '../res/logout.png';
import TopBarItem from './TopbarItemComponent';

class TopBar extends Component {
    static propTypes = {
      currentPath: PropTypes.string.isRequired,
    };

    logout = () => {
      this.props.logoutAction();
    };

    render() {
      const blur = this.props.theme && this.props.theme.blur;
      const items = tabs.map(tab =>
        (<TopBarItem
          key={tab.path}
          icon={tab.icon}
          label={tab.label}
          path={tab.path}
          isCurrent={this.props.currentPath === tab.path}
        />));

      return (
        <section className={`top-bar-wrapper ${blur ? 'blur' : ''}`}>
          <div className="top-bar content">
            <div className="left-tabs">
              {items}
            </div>
            <div className="right-tabs">
              <TopBarItem label="Wyloguj" icon={logoutIcon} path="/auth/login" onClick={this.logout} />
            </div>
          </div>
        </section>
      );
    }
}

const mapStateToProps = ({ theme }) => ({ theme });
const mapDispatchToProps = {
  logoutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
