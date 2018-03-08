import React, { Component } from 'react';
import { compose } from 'redux';
import { muiThemeable } from 'material-ui/styles/index';
import { connect } from 'react-redux';
import { addNewBoardGame, changeCurrentBoardGame, getAllBoardGames } from '../board-games.actions';
import '../board-games.css';
import { withTopbar } from '../../topbar/with-topbar';
import OneGameItem from './one-board-game-item.component';
import AddGame from './../add-board-game/add-board-game-item.component';
import AddGameDialog from './../add-board-game/add-board-game.dialog';
import { boardNameExistsRequest } from './../board-games.api';

class BoardGamesList extends Component {
    state = {
      visibleDialog: false,
      dialogError: false,
    };

    async componentDidMount() {
      await this.props.getAllGames();
    }

    selectGame = (game) => {
      this.props.changeCurrentGame(game);
      this.props.history.push(`/games/${game.id}`);
    };

    openDialog = () => {
      this.setState({ visibleDialog: true });
    };

    addGame = async (name) => {
      const { exists } = await boardNameExistsRequest(name);

      if (exists)
        this.setState({ dialogError: true });
      else {
        this.setState({ dialogError: false });
        this.hideDialog();
        this.props.addGame(name);
      }
    };

    hideDialog = () => {
      this.setState({ visibleDialog: false });
    };

    render() {
      const
        games = this.props.games &&
                this.props.games.map(game => (
                  <li className="no-li" key={game.id}>
                    <OneGameItem key={game.id} game={game} onClick={this.selectGame} />
                  </li>
                ));

      return (
        <section className="content">
          <ul className="board-games-wrapper">
            <AddGame
              iconColor={this.props.muiTheme.palette.accent1Color}
              onClick={this.openDialog}
            />
            {games}
          </ul>

          <AddGameDialog
            show={this.state.visibleDialog}
            isError={this.state.dialogError}
            onSubmit={this.addGame}
            onCancel={this.hideDialog}
          />
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
  addGame: addNewBoardGame,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  muiThemeable(),
)(withTopbar(BoardGamesList, '/games'));