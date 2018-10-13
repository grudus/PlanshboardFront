import { muiThemeable } from 'material-ui/styles/index';
import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import { connect } from 'react-redux';
import { compose } from 'redux';
import SearchInput from '../../../commons/SearchInputComponent';
import { addBlur, removeBlur } from '../../../theme/themeActions';
import withTopbar from '../../topbar/withTopbar';
import AddGameDialog from '../add-board-game/AddBoardGameDialogComponent';
import AddGame from '../add-board-game/AddBoardGameItemComponent';
import '../boardGames.scss';
import {
  addNewBoardGame,
  changeCurrentBoardGame,
  deleteBoardGame,
  getAllBoardGames,
  renameBoardGame,
} from '../boardGamesActions';
import { boardNameExistsRequest } from '../boardGamesApi';
import DeleteBoardGameDialog from '../delete-board-game/DeleteBoardGameDialogComponent';
import EditBoardGameDialog from '../edit-board-gam/EditBoardGameDialogComponent';
import OneGameItem from './OneBoardGameItemComponent';


class BoardGamesList extends Component {
    state = {
      showAddNewDialog: false,
      showEditDialog: false,
      showDeleteDialog: false,
      dialogError: false,
      currentModalGame: {},
      searchText: '',
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
      if (event) event.stopPropagation();
    };

    checkGameExistenceAndDo = async (name, callback) => {
      const { exists } = await boardNameExistsRequest(name);

      if (exists) this.setState({ dialogError: true });
      else {
        this.setState({ dialogError: false });
        callback();
      }
    };

    addGame = async (name, callback) => {
      await this.checkGameExistenceAndDo(name, () => {
        this.hideDialog('showAddNewDialog');
        this.props.addGame(name);
        callback();
      });
    };

    deleteGame = async () => {
      await this.props.deleteGame(this.state.currentModalGame.id);
      this.hideDialog('showDeleteDialog');
    };

    editGame = async (newName) => {
      const { currentModalGame } = this.state;
      if (newName === currentModalGame.name) {
        this.hideDialog('showEditDialog');
        return;
      }

      await this.checkGameExistenceAndDo(newName, () => {
        this.hideDialog('showEditDialog');
        this.props.renameGame(newName, currentModalGame.id);
      });
    };

    hideDialog = (dialog) => {
      this.setState({ [dialog]: false, currentModalGame: null });
      this.props.removeBlur();
    };

    searchGames = (searchText) => {
      this.setState({ searchText });
    };

    render() {
      const isSearched = ({ name }) => name.toLowerCase()
        .includes(this.state.searchText.toLowerCase());

      const
        games = this.props.games
                && this.props.games
                  .filter(isSearched)
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map(game => (
                    <li className="no-li" key={game.id}>
                      <OneGameItem
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

          <div className="search-wrapper">
            <div className="search">
              <SearchInput onSearchChange={this.searchGames} />
            </div>
          </div>

          <ul className="board-games-wrapper">
            <AddGame
              iconColor={this.props.muiTheme.palette.accent1Color}
              onClick={() => this.openDialog('showAddNewDialog')}
            />
            <FlipMove
              enterAnimation="elevator"
              leaveAnimation={null}
              staggerDelayBy={15}
              easing="linear"
              typeName={null}
            >
              {games}
            </FlipMove>
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
          <EditBoardGameDialog
            show={this.state.showEditDialog}
            onSubmit={this.editGame}
            onCancel={() => this.hideDialog('showEditDialog')}
            name={currentModalGameName}
            isError={this.state.dialogError}
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
  renameGame: renameBoardGame,
  addBlur,
  removeBlur,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  muiThemeable(),
)(withTopbar(BoardGamesList, '/games'));
