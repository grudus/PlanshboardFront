import React, { Component } from 'react';
import { connect } from 'react-redux';
import withTopbar from '../../topbar/withTopbar';
import { getSpecificBoardGame } from '../boardGamesApi';
import { changeCurrentBoardGame } from '../boardGamesActions';
import './singleBoardGame.scss';
import GamesTable from './plays-table/PlaysTableComponent';
import AddPlayDialog from './add-play/AddPlayDialogComponent';
import { addNewPlay, getAllPlays } from './playsActions';
import { getAllOpponents } from '../../opponents/opponentsActions';
import { addBlur, removeBlur } from '../../../theme/themeActions';

class BoardGame extends Component {
    state = {
      showAddPlayDialog: false,
    };

    async componentDidMount() {
      try {
        const game = await getSpecificBoardGame(this.props.match.params.gameId);
        this.props.changeCurrentGame(game);
        this.props.getPlays(game.id);
      } catch (e) {
        this.props.history.push('/games');
      }
    }

    submitAddPlay = async (results, date, note) => {
      await this.props.addPlay(this.props.match.params.gameId, results, date, note);
      this.hideDialog();
    };

    openDialog = (dialog = 'showAddPlayDialog') => {
      this.setState({ [dialog]: true });
      this.props.addBlur();
    };

    hideDialog = (dialog = 'showAddPlayDialog') => {
      this.setState({ [dialog]: false });
      this.props.removeBlur();
    };

    render() {
      const { boardGames } = this.props;
      const plays = boardGames.currentGame ? boardGames.currentGame.plays : [];

      return (
        <article className="board-game-wrapper">
          <div className="board-game-header">
            <h2 className="board-game-title">{boardGames.currentGame && boardGames.currentGame.name}</h2>
          </div>
          <GamesTable
            plays={plays}
            onAddPlayClick={() => this.openDialog()}
            onPlayRowClick={() => {}}
          />
          <AddPlayDialog
            show={this.state.showAddPlayDialog}
            onCancel={() => this.hideDialog()}
            onSubmit={this.submitAddPlay}
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
  addPlay: addNewPlay,
  getOpponents: getAllOpponents,
  addBlur,
  removeBlur,
};

export default connect(mapStateToProps, mapDispatchToProps)(withTopbar(BoardGame, '/games/:id'));
