import React, { Component } from "react"
import { connect } from "react-redux";
import PropTypes from "prop-types";

class SingleGame extends Component {

    static propTypes = {
        game: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    };

    render() {
        const {game} = this.props;

        return (
            <div>
            <span>{`${game.id}: ${game.name}`}</span>
            </div>
        )
    }
}


export default connect()(SingleGame);