import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from 'material-ui';
import YesNoButton from '../../../commons/YesNoButtonsComponent';


const DeleteBoardGameDialog = (props) => {
  const buttons = (<YesNoButton
    submitText="Usuń"
    onCancel={props.onCancel}
    onSubmit={props.onSubmit}
  />);

  return (
    <Dialog
      title="Usunięcie gry"
      actions={buttons}
      modal={false}
      open={props.show}
      onRequestClose={props.onCancel}
    >
      {`Czy na pewno chcesz usunąć grę "${props.name}" i wszystkie związane z nią elementy?`}
    </Dialog>
  );
};

DeleteBoardGameDialog.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  name: PropTypes.string,
};

DeleteBoardGameDialog.defaultProps = {
  name: '',
};

export default DeleteBoardGameDialog;
