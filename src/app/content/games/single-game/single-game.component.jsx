import React, { Component } from "react"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { red500 } from "material-ui/styles/colors"
import ClickableIcon from "../../../commons/clickable-icon.component";
import DeleteGameDialog from "./delete-game-diaolog.component";
import muiThemeable from 'material-ui/styles/muiThemeable';
import { deleteBoardGame } from "../board-games/board-games.actions";
import { compose } from "redux";

class SingleGame extends Component {

    state = {showDeleteDialog: false};

    static propTypes = {
        game: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    };

    showDeleteDialog = () => {
        this.setState({showDeleteDialog: true});
    };

    hideDeleteDialog = () => {
        this.setState({showDeleteDialog: false});
    };

    submitDeletion = () => {
        this.props.deleteBoardGame(this.props.game.id);
        this.hideDeleteDialog();
    };

    render() {
        const {game} = this.props;

        return (
            <div className="game-title-wrapper">
                <h1 className="game-title">{game.name}</h1>
                <span style={{marginLeft: '8px', padding: '8px'}}><ClickableIcon name="create"
                                                                                 hoverColor={this.props.muiTheme.palette.accent1Color}/></span>
                <span><ClickableIcon hoverColor={red500} name="delete" onClick={this.showDeleteDialog}/></span>

                <DeleteGameDialog shouldShowModal={this.state.showDeleteDialog} onSubmit={this.submitDeletion}
                                  closePopup={this.hideDeleteDialog}/>
            </div>
        )
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {
    deleteBoardGame,
};

export default compose(muiThemeable(),
    connect(mapStateToProps, mapDispatchToProps))(SingleGame);