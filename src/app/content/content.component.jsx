import React from 'react';
import { Switch } from 'react-router-dom';
import Route from 'react-router-dom/es/Route';
import Games from './games/games.component';
import Landing from './landing/landing.component';
import './content.css';

export default () =>
  (
    <Switch>
      <Route path="/games" component={Games} />
      <Route path="/" component={Landing} />
    </Switch>
  );

