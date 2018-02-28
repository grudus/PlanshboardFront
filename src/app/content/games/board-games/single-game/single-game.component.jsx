import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTopbar } from '../../../topbar/with-topbar';
import { getSpecificBoardGame } from '../board-games.api';
import { changeCurrentBoardGame } from '../board-games.actions';


class BoardGame extends Component {
  async componentDidMount() {
    if (this.props.currentGame)
      return;

    try {
      const game = await getSpecificBoardGame(this.props.match.params.gameId);
      this.props.changeCurrentGame(game);
    } catch (e) {
      this.props.history.push('/games');
    }
  }

  render() {
    const { games } = this.props;
    return (
      <div>
        {games.currentGame && games.currentGame.name}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  games: state.boardGames,
});

const mapDispatchToProps = {
  changeCurrentGame: changeCurrentBoardGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(withTopbar(BoardGame, '/games/:id'));
