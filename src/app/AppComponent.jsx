import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';
import { connect } from 'react-redux';
import 'moment/locale/pl';
import Mousetrap from 'mousetrap';
import moment from 'moment';
import { Route, Switch, withRouter } from 'react-router-dom';
import muiTheme from './theme/MuiTheme';
import { tryResolveCurrentUser } from './content/users/userActions';
import { loginCurrentUser } from './auth/login/loginActions';
import './app.css';
import Content from './content/ContentComponent';
import Login from './auth/login/LoginComponent';
import Registration from './auth/registration/registrationComponent';
import { removeBlur, startLoading, stopLoading } from './theme/themeActions';

class App extends Component {
  async componentDidMount() {
    this.props.startLoading();
    document.documentElement.style.setProperty('--primary-color', muiTheme.palette.primary1Color);
    document.documentElement.style.setProperty('--accent-color', muiTheme.palette.accent1Color);
    document.documentElement.style.setProperty('--background-color', muiTheme.palette.backgroundColor);
    document.documentElement.style.setProperty('--dark-background-color', muiTheme.palette.darkBackgroundColor);
    document.documentElement.style.setProperty('--light-text-color', muiTheme.palette.lightTextColor);
    document.documentElement.style.setProperty('--text-color', muiTheme.palette.textColor);
    document.documentElement.style.setProperty('--add-text-color', muiTheme.palette.addTextColor);
    document.documentElement.style.setProperty('--card-background-color', muiTheme.palette.cardBackgroundColor);
    document.documentElement.style.setProperty('--border-color', muiTheme.palette.borderColor);

    moment.locale('pl');

    Mousetrap.bind('up up b u b a', () => {
      this.props.startLoading();
    });

    Mousetrap.bind('down down b u b a', () => {
      this.props.stopLoading();
    });

    this.props.history.listen(() => {
      this.props.removeBlur();
    });

    try {
      await this.props.resolveCurrentUser();
      this.props.loginCurrentUser();
    } catch (e) {
      this.props.history.push('/auth/login');
    } finally {
      this.props.stopLoading();
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Switch>
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/registration" component={Registration} />
          <Route path="/" component={Content} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
});

const mapDispatchToProps = {
  resolveCurrentUser: tryResolveCurrentUser,
  loginCurrentUser,
  removeBlur,
  startLoading,
  stopLoading,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

