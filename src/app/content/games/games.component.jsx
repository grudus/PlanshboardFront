import React, { Component } from "react"
import BoardGameList from "./board-games/board-games-list.component";
import { connect } from "react-redux";
import { changeCurrentGame, getAllGames } from "./games.actions";

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
        return (
            <div style={{display: 'flex', marginTop: '54px', marginLeft: '24px'}}>
                <article style={{padding: '16px'}}>
                    <BoardGameList games={this.props.games} onSelect={this.selectGame}/>
                </article>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    games: state.games.allGames
});

const mapDispatchToProps = {
    changeCurrentGame,
    getAllGames,
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);