import React from 'react';
import PropTypes from 'prop-types';
import YesNoButton from '../../../commons/YesNoButtonsComponent';
import MaterialDialog from '../../../commons/material/MaterialDialog';


const DeleteBoardGameDialog = (props) => {
  const buttons = (<YesNoButton
    submitText="Usuń"
    onCancel={props.onCancel}
    onSubmit={props.onSubmit}
  />);

  return (
    <MaterialDialog
      title="Usunięcie gry"
      actions={buttons}
      modal={false}
      open={props.show}
      onRequestClose={props.onCancel}
    >
      {`Czy na pewno chcesz usunąć grę "${props.name}" i wszystkie związane z nią elementy?`}
    </MaterialDialog>
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
