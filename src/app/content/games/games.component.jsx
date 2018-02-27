import React, { Component } from 'react';
import { compose } from 'redux';
import { muiThemeable } from 'material-ui/styles/index';
import { connect } from 'react-redux';
import { addNewBoardGame, changeCurrentBoardGame, getAllBoardGames } from './board-games/board-games.actions';
import './games.css';
import { withTopbar } from '../topbar/with-topbar';
import OneGameItem from './board-games/one-game-item.component';
import AddGame from './board-games/add-game/add-game-item.component';
import AddGameDialog from './board-games/add-game/add-game.dialog';
import { boardNameExistsRequest } from './board-games/board-games.api';

class Games extends Component {
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
      const response = await boardNameExistsRequest(name);

      if (response.exists)
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
          <ul className="games-wrapper">
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
)(withTopbar(Games, '/games'));
