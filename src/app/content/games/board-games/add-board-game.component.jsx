import React, { Component } from "react"
import { TextField } from "material-ui";
import { boardNameExistsRequest } from "./board-games.api";
import { addNewBoardGame } from "./board-games.actions";
import { connect } from "react-redux";


class AddBoardGame extends Component {
    state = {
        name: "",
        error: "",
    };

    onChange = (e) => this.setState({name: e.target.value, error: ""});

    addNewGame = async (e) => {
        e.preventDefault();
        const nameExists = (await boardNameExistsRequest(this.state.name)).exists;

        if (nameExists) {
            this.setState({error: "Taka gra już istnieje"});
        }
        else {
            this.props.addNewBoardGame(this.state.name);
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

const mapStateToProps = () => ({});
const mapDispatchToProps = {
    addNewBoardGame
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBoardGame);