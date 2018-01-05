import React, { Component, Fragment } from "react"
import BoardGameList from "./board-games/board-games-list.component";
import { connect } from "react-redux";
import { changeCurrentBoardGame, getAllBoardGames } from "./board-games/board-games.actions";
import "./games.css";
import AddBoardGame from "./board-games/add-board-game.component";
import SingleGame from "./single-game/single-game.component";
import GameNotFound from "./game-not-found.component";

class Games extends Component {
    state = {showGameNotFound: false};

    selectGame = (game) => {
        this.props.changeCurrentGame(game);
        this.props.history.push(`/games/${game.id}`)
    };

    async componentDidMount() {
        await this.props.getAllGames();
        const {games} = this.props;
        const {gameId} = this.props.match.params;

        this.setState({showGameNotFound: !!gameId});

        const selectedGame = games.find(game => game.id === parseInt(gameId, 10));

        if (selectedGame && games && games.length > 0) {
            this.selectGame(selectedGame);
        }
        else if (!selectedGame) {
            this.selectGame(this.props.currentGame)
        }
    }

    componentDidUpdate() {
        const {currentGame} = this.props;
        const id = currentGame ? currentGame.id : 0;
        const urlGameId = parseInt(this.props.match.params.gameId, 10);

        if (id && id !== urlGameId)
            this.props.history.push(`/games/${id}`);
    }

    render() {
        const {games, currentGame} = this.props;
        const id = currentGame ? currentGame.id : 0;
        const list = games && games.length > 0 ?
            <BoardGameList games={games} onSelect={this.selectGame} startId={id}/> : <Fragment/>;

        return (
            <div className="board-game-list-wrapper">
                <article className="game-list">
                    <AddBoardGame/>
                    {list}
                </article>
                {currentGame ? <SingleGame game={currentGame}/> : (this.state.showGameNotFound ? <GameNotFound/> :
                    <Fragment/>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    games: state.boardGames.allGames,
    currentGame: state.boardGames.currentGame
});

const mapDispatchToProps = {
    changeCurrentGame: changeCurrentBoardGame,
    getAllGames: getAllBoardGames,
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);