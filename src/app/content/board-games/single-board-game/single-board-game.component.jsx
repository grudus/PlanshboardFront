import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTopbar } from '../../topbar/with-topbar';
import { getSpecificBoardGame } from '../board-games.api';
import { changeCurrentBoardGame } from '../board-games.actions';
import './single-board-game.css';
import GamesTable from './plays-table/plays-table.component';
import { AddPlayDialog } from './add-play/add-play-dialog.component';
import { getAllPlays } from './plays.actions';

class BoardGame extends Component {
  state = { showAddPlayDialog: false };

  async componentDidMount() {
    if (this.props.currentGame)
      return;

    try {
      const game = await getSpecificBoardGame(this.props.match.params.gameId);
      this.props.changeCurrentGame(game);
      this.props.getPlays(game.id);
    } catch (e) {
      this.props.history.push('/games');
    }
  }

  openDialog = () => {
    this.setState({ showAddPlayDialog: true });
  };

  hideDialog = () => {
    this.setState({ showAddPlayDialog: false });
  };

  render() {
    const { boardGames } = this.props;
    const plays = boardGames.currentGame ? boardGames.currentGame.plays : [];

    return (
      <article className="board-game-wrapper">
        <div className="board-game-header">
          <h2 className="board-game-title">{boardGames.currentGame && boardGames.currentGame.name}</h2>
        </div>
        <GamesTable plays={plays} onAddPlayClick={this.openDialog} />
        <AddPlayDialog
          show={this.state.showAddPlayDialog}
          onCancel={this.hideDialog}
          onSubmit={this.hideDialog}
        />
      </article>
    );
  }
}

const mapStateToProps = state => ({
  boardGames: state.boardGames,
});

const mapDispatchToProps = {
  changeCurrentGame: changeCurrentBoardGame,
  getPlays: getAllPlays,
};

export default connect(mapStateToProps, mapDispatchToProps)(withTopbar(BoardGame, '/games/:id'));
