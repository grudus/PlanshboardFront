import React, { Component } from "react"

class GameNotFound extends Component {
    state = {error: ""};

    componentDidMount() {
        this.setState({error: "Nie znaleziono podanej gry"})
    }

    render() {
        return (
            <div className="game-not-found-wrapper">
                <h2 className="game-not-found-title">{this.state.error}</h2>
            </div>
        )
    }
}

export default GameNotFound;