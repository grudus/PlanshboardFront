import React from 'react';
import { Switch } from 'react-router-dom';
import Route from 'react-router-dom/es/Route';
import BoardGamesList from './board-games/board-games-list/BoardGamesListComponent';
import Landing from './landing/LandingComponent';
import './content.css';
import BoardGame from './board-games/single-board-game/SingleBoardGameComponent';

export default () => (
  <Switch>
    <Route path="/games/:gameId" component={BoardGame} />
    <Route path="/games" component={BoardGamesList} />
    <Route path="/" component={Landing} />
  </Switch>
);
