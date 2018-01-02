import React, { Component, Fragment } from "react"
import BoardGameList from "./board-games/board-games-list.component";
import { connect } from "react-redux";
import { addNewBoardGame, changeCurrentBoardGame, getAllBoardGames } from "./games.actions";
import "./games.css";
import AddBoardGame from "./board-games/add-board-game.component";

class Games extends Component {

    selectGame = (game) => {
        this.props.changeCurrentGame(game);
    };

    addNewGame = (name) => {
        this.props.addNewBoardGame(name);
    };

    async componentDidMount() {
        await this.props.getAllGames();
        const {games} = this.props;
        if (games && games.length > 0)
            this.selectGame(games[0]);
    }

    render() {
        const {games} = this.props;
        const list = games && games.length > 0 ? <BoardGameList games={games} onSelect={this.selectGame}/> : <Fragment/>
        return (
            <div style={{display: 'flex', marginTop: '54px', marginLeft: '24px'}}>
                <article className="game-list">
                    <AddBoardGame onAddNewGame={this.addNewGame}/>
                    {list}
                </article>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    games: state.games.allGames
});

const mapDispatchToProps = {
    changeCurrentGame: changeCurrentBoardGame,
    getAllGames: getAllBoardGames,
    addNewBoardGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);