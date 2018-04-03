/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from 'material-ui';

const MaterialDialog = props =>
  (
    <Dialog
      title={props.title}
      actions={props.actions}
      modal={props.modal}
      open={props.open}
      contentClassName="card-background"
      paperClassName="card-background"
      titleClassName="card-background"
      bodyClassName="card-background"
      actionsContainerClassName="card-background"
      onRequestClose={props.onRequestClose}
    >
      {props.children}
    </Dialog>
  );

MaterialDialog.propTypes = {
  actions: PropTypes.any.isRequired,
  modal: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

MaterialDialog.defaultProps = {
  modal: false,
};

export default MaterialDialog;
