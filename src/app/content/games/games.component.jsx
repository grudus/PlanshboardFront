import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { changeCurrentBoardGame, getAllBoardGames } from './board-games/board-games.actions';
import './games.css';
import { withTopbar } from '../topbar/with-topbar';
import SingleItem from './single-game/single-game.component';

class Games extends Component {
  async componentDidMount() {
    await this.props.getAllGames();
  }

    selectGame = (game) => {
      this.props.changeCurrentGame(game);
      this.props.history.push(`/games/${game.id}`);
    };

    render() {
      const games = this.props.games &&
          this.props.games.map(game => <SingleItem key={game.id} name={game.name} />);

      return (
        <Fragment>
          <div>Games!</div>
          <ul>
            {games}
          </ul>
        </Fragment>
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
