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
      contentClassName={`card-background ${props.contentClassName}`}
      paperClassName={`card-background ${props.paperClassName}`}
      titleClassName={`card-background ${props.titleClassName}`}
      bodyClassName={`card-background ${props.bodyClassName}`}
      actionsContainerClassName={`card-background ${props.actionsContainerClassName}`}
      onRequestClose={props.onRequestClose}
      autoScrollBodyContent={props.autoScrollBodyContent}
      autoDetectWindowHeight={props.autoDetectWindowHeight}
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
  bodyClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  paperClassName: PropTypes.string,
  autoScrollBodyContent: PropTypes.bool,
  autoDetectWindowHeight: PropTypes.bool,
};

MaterialDialog.defaultProps = {
  modal: false,
  bodyClassName: '',
  paperClassName: '',
  contentClassName: '',
  titleClassName: '',
  autoScrollBodyContent: true,
  autoDetectWindowHeight: true,
};

export default MaterialDialog;
