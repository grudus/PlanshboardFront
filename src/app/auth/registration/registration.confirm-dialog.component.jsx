import React from "react"
import { Dialog, FlatButton } from "material-ui";

const RegistrationConfirmDialog = (props) => {
    const button = <FlatButton
        label="Ok"
        primary={true}
        onClick={props.closePopup}
    />;

    return (
        <Dialog
            title="Witamy na pokładzie!"
            modal={false}
            open={props.shouldShowModal}
            onRequestClose={props.closePopup}
            actions={button}>
            Twoje konto zostało poprawnie stworzone. Zaloguj się, aby kontynuować.
        </Dialog>
    )
};

export default RegistrationConfirmDialog;