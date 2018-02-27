import React from 'react';
import { Switch } from 'react-router-dom';
import Route from 'react-router-dom/es/Route';
import Games from './games/games.component';
import Landing from './landing/landing.component';
import './content.css';
import BoardGame from './games/board-games/single-game/single-game.component';

export default () =>
  (
    <Switch>
      <Route path="/games/:gameId" component={BoardGame} />
      <Route path="/games" component={Games} />
      <Route path="/" component={Landing} />
    </Switch>
  );

