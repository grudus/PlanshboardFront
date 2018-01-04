import React, { Component } from "react"
import { TextField } from "material-ui";
import PropTypes from "prop-types";
import { boardNameExistsRequest } from "./board-games.api";


class AddBoardGame extends Component {
    state = {
        name: "",
        error: "",
    };

    static propTypes = {
        onAddNewGame: PropTypes.func.isRequired,
    };

    onChange = (e) => this.setState({name: e.target.value, error: ""});

    addNewGame = async (e) => {
        e.preventDefault();
        const nameExists = (await boardNameExistsRequest(this.state.name)).exists;

        if (nameExists) {
            this.setState({error: "Taka gra już istnieje"});
        }
        else {
            this.props.onAddNewGame(this.state.name);
            this.setState({name: ""});
        }
    };

    render() {
        return (
            <form onSubmit={this.addNewGame}>
                <TextField value={this.state.name} floatingLabelText="Dodaj grę" style={{marginBottom: '8px'}}
                           onChange={this.onChange} errorText={this.state.error}/>
            </form>
        )
    }
}

export default AddBoardGame;