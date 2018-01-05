import React from "react"
import { Dialog, FlatButton } from "material-ui";
import PropTypes from "prop-types";

const DeleteGameDialog = (props) => {

    const okButton = <FlatButton
        label="Usuń"
        secondary={true}
        onClick={props.onSubmit}
    />;


    const noButton = <FlatButton
        label="Wróć"
        onClick={props.closePopup}
    />;



    return (
        <Dialog
            title="Potwierdzenie usunięcia"
            modal={false}
            open={props.shouldShowModal}
            onRequestClose={props.closePopup}
            actions={[noButton, okButton]}>
            Czy na pewno chcesz usunąć grę i wszystkie dane z nią związane?
        </Dialog>
    );

};

DeleteGameDialog.propTypes = {
    shouldShowModal: PropTypes.bool.isRequired,
    closePopup: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default DeleteGameDialog;