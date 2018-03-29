import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';
import { connect } from 'react-redux';
import 'moment/locale/pl';
import moment from 'moment';
import { Route, Switch, withRouter } from 'react-router-dom';
import muiTheme from './theme/MuiTheme';
import { tryResolveCurrentUser } from './content/users/userActions';
import { loginCurrentUser } from './auth/login/loginActions';
import './app.css';
import Content from './content/ContentComponent';
import Login from './auth/login/LoginComponent';
import Registration from './auth/registration/registrationComponent';

class App extends Component {
  async componentDidMount() {
    document.documentElement.style.setProperty('--primary-color', muiTheme.palette.primary1Color);
    document.documentElement.style.setProperty('--accent-color', muiTheme.palette.accent1Color);
    document.documentElement.style.setProperty('--light-gray-color', muiTheme.palette.lightGrayColor);
    document.documentElement.style.setProperty('--dark-text-color', muiTheme.palette.darkTextColor);

    moment.locale('pl');

    try {
      await this.props.resolveCurrentUser();
      this.props.loginCurrentUser();
    } catch (e) {
      this.props.history.push('/auth/login');
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
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

