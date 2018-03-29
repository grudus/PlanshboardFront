import React, { Component } from 'react';
import { compose } from 'redux';
import { muiThemeable } from 'material-ui/styles/index';
import { connect } from 'react-redux';
import { addNewBoardGame, changeCurrentBoardGame, getAllBoardGames, deleteBoardGame } from '../boardGamesActions';
import '../boardGames.css';
import withTopbar from '../../topbar/withTopbar';
import OneGameItem from './OneBoardGameItemComponent';
import AddGame from '../add-board-game/AddBoardGameItemComponent';
import AddGameDialog from '../add-board-game/AddBoardGameDialogComponent';
import { boardNameExistsRequest } from '../boardGamesApi';
import { addBlur, removeBlur } from '../../../theme/themeActions';
import DeleteBoardGameDialog from '../delete-board-game/DeleteBoardGameDialogComponent';

class BoardGamesList extends Component {
    state = {
      showAddNewDialog: false,
      // showEditDialog: false,
      showDeleteDialog: false,
      dialogError: false,
      currentModalGame: {},
    };

    async componentDidMount() {
      await this.props.getAllGames();
    }

    selectGame = (game) => {
      this.props.changeCurrentGame(game);
      this.props.history.push(`/games/${game.id}`);
    };

    openDialog = (dialog, event, currentModalGame) => {
      this.setState({ [dialog]: true, currentModalGame });
      this.props.addBlur();
      if (event) {
        event.stopPropagation();
      }
    };

    addGame = async (name) => {
      const { exists } = await boardNameExistsRequest(name);

      if (exists)
        this.setState({ dialogError: true });
      else {
        this.setState({ dialogError: false });
        this.hideDialog('showAddNewDialog');
        this.props.addGame(name);
      }
    };

    deleteGame = async () => {
      await this.props.deleteGame(this.state.currentModalGame.id);
      this.hideDialog('showDeleteDialog');
    };

    hideDialog = (dialog) => {
      this.setState({ [dialog]: false, currentModalGame: null });
      this.props.removeBlur();
    };

    render() {
      const
        games = this.props.games &&
                this.props.games.map(game => (
                  <li className="no-li" key={game.id}>
                    <OneGameItem
                      key={game.id}
                      game={game}
                      onClick={this.selectGame}
                      onDeleteClick={e => this.openDialog('showDeleteDialog', e, game)}
                      onEditClick={e => this.openDialog('showEditDialog', e, game)}
                    />
                  </li>
                ));

      const currentModalGameName = this.state.currentModalGame && this.state.currentModalGame.name;

      return (
        <section className="content">
          <ul className="board-games-wrapper">
            <AddGame
              iconColor={this.props.muiTheme.palette.accent1Color}
              onClick={() => this.openDialog('showAddNewDialog')}
            />
            {games}
          </ul>

          <AddGameDialog
            show={this.state.showAddNewDialog}
            isError={this.state.dialogError}
            onSubmit={this.addGame}
            onCancel={() => this.hideDialog('showAddNewDialog')}
          />
          <DeleteBoardGameDialog
            onCancel={() => this.hideDialog('showDeleteDialog')}
            onSubmit={this.deleteGame}
            show={this.state.showDeleteDialog}
            name={currentModalGameName}
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
  deleteGame: deleteBoardGame,
  addBlur,
  removeBlur,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  muiThemeable(),
)(withTopbar(BoardGamesList, '/games'));
