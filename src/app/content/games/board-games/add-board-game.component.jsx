import React, { Component } from "react"
import { TextField } from "material-ui";
import PropTypes from "prop-types";


class AddBoardGame extends Component {
    state = {name: ""};

    static propTypes = {
        onAddNewGame: PropTypes.func.isRequired,
    };

    onChange = (e) => this.setState({name: e.target.value});

    addNewGame = (e) => {
        e.preventDefault();
        this.props.onAddNewGame(this.state.name);
        this.setState({name: ""});
    };

    render() {
        return (
            <form onSubmit={this.addNewGame}>
                <TextField value={this.state.name} floatingLabelText="Dodaj grę" style={{marginBottom: '8px'}}
                           onChange={this.onChange}/>
            </form>
        )
    }
}

export default AddBoardGame;