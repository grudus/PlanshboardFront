import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { withTopbar } from '../../../topbar/with-topbar';
import { getSpecificBoardGame } from '../board-games.api';
import { changeCurrentBoardGame } from '../board-games.actions';
import './single-game.css';
import GamesTable from './games-table/games-table.component';

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
    const { boardGames } = this.props;

    const games = [{
      id: 1,
      date: moment(),
      opponents: [
        { position: 1, name: 'grudus' },
        { position: 2, name: 'madzia' },
        { position: 3, name: 'karwat' },
      ],
    }, {
      id: 2,
      date: moment().subtract(3, 'hour'),
      info: 'Kleska konkretna',
      opponents: [
        { position: 2, name: 'grudus' },
        { position: 1, name: 'madzia' },
      ],
    }, {
      id: 3,
      date: moment().subtract(2, 'day'),
      info: 'smiesznie bylo',
      opponents: [
        { position: 1, name: 'grudus' },
        { position: 2, name: 'madzia' },
        { position: 3, name: 'golec' },
        { position: 4, name: 'karwat' },
        { position: 5, name: 'Kozioł' },
        { position: 6, name: 'Kasia' },
      ],
    },
    {
      id: 4,
      date: moment().subtract(3, 'day').subtract(2, 'hour'),
      opponents: [
        { position: 1, name: 'grudus' },
        { position: 2, name: 'madzia' },
        { position: 3, name: 'golec' },
      ],
    },
    ];


    return (
      <article className="board-game-wrapper">
        <div className="board-game-header">
          <h2 className="board-game-title">{boardGames.currentGame && boardGames.currentGame.name}</h2>
        </div>

        <GamesTable games={games} />

      </article>
    );
  }
}

const mapStateToProps = state => ({
  boardGames: state.boardGames,
});

const mapDispatchToProps = {
  changeCurrentGame: changeCurrentBoardGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(withTopbar(BoardGame, '/games/:id'));
