import React, { Component } from "react"
import BoardGameList from "./board-games/board-games-list.component";
import { connect } from "react-redux";

class Games extends Component {

    render() {
        return (
            <div style={{display: 'flex', marginTop: '54px', marginLeft: '24px'}}>
                <article style={{padding: '16px'}}>
                    <BoardGameList games={this.props.games}/>
                </article>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    games: state.games.allGames
});

export default connect(mapStateToProps)(Games);