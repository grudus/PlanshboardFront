import React, { Component, Fragment } from "react"
import BoardGameList from "./board-games/board-games-list.component";
import { connect } from "react-redux";
import { changeCurrentBoardGame, getAllBoardGames } from "./board-games/board-games.actions";
import "./games.css";
import AddBoardGame from "./board-games/add-board-game.component";

class Games extends Component {

    selectGame = (game) => {
        this.props.changeCurrentGame(game);
    };

    async componentDidMount() {
        await this.props.getAllGames();
        const {games} = this.props;
        if (games && games.length > 0)
            this.selectGame(games[0]);
    }

    render() {
        const {games} = this.props;
        const list = games && games.length > 0 ? <BoardGameList games={games} onSelect={this.selectGame}/> : <Fragment/>;
        return (
            <div className="board-game-list-wrapper">
                <article className="game-list">
                    <AddBoardGame />
                    {list}
                </article>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    games: state.boardGames.allGames
});

const mapDispatchToProps = {
    changeCurrentGame: changeCurrentBoardGame,
    getAllGames: getAllBoardGames,
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);