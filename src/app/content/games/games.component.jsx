import React, { Component } from 'react';
import { FontIcon } from 'material-ui';
import { compose } from 'redux';
import { muiThemeable } from 'material-ui/styles/index';
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
        <section className="content">
          <ul className="games-wrapper">
            <div className="add-single-game pointer anim">
              <FontIcon
                className="material-icons add-single-label"
                color={this.props.muiTheme.palette.accent1Color}
                style={{ fontSize: '2.5em' }}
              >add_circle_outline
              </FontIcon>
            </div>
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
