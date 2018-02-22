import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeCurrentBoardGame, getAllBoardGames } from './board-games/board-games.actions';
import './games.css';
import { withTopbar } from '../topbar/with-topbar';

class Games extends Component {
  async componentDidMount() {
    await this.props.getAllGames();
  }

    selectGame = (game) => {
      this.props.changeCurrentGame(game);
      this.props.history.push(`/games/${game.id}`);
    };

    render() {
      return (
        <div>Games!</div>
      );
    }
}

const mapStateToProps = state => ({
  games: state.boardGames.allGames,
});

const mapDispatchToProps = {
  changeCurrentGame: changeCurrentBoardGame,
  getAllGames: getAllBoardGames,
};

export default connect(mapStateToProps, mapDispatchToProps)(withTopbar(Games, '/games'));
