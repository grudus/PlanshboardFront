import React, { Component } from 'react';
import { compose } from 'redux';
import { muiThemeable } from 'material-ui/styles/index';
import { connect } from 'react-redux';
import { changeCurrentBoardGame, getAllBoardGames } from './board-games/board-games.actions';
import './games.css';
import { withTopbar } from '../topbar/with-topbar';
import SingleItem from './single-game/single-game.component';
import AddGame from './add-game.component';

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
            this.props.games.map(game => (
              <li className="no-li">
                <SingleItem key={game.id} name={game.name} />
              </li>
            ));

      return (
        <section className="content">
          <ul className="games-wrapper">
            <AddGame iconColor={this.props.muiTheme.palette.accent1Color} />
            {games}
          </ul>
        </section>
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  muiThemeable(),
)(withTopbar(Games, '/games'));
