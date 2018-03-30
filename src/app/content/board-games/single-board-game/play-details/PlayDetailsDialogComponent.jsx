import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, FlatButton } from 'material-ui';

const PlayDetailsDialog = (props) => {
  const buttons = (
    <FlatButton
      label="Cofnij"
      primary
      onClick={props.onCancel}
    />
  );

  return (
    props.play &&
      <Dialog
        title="Szczegóły rozgrywki"
        actions={buttons}
        modal={false}
        open={props.show}
        autoScrollBodyContent
        autoDetectWindowHeight
        onRequestClose={props.onCancel}
      >
        <pre>
          {JSON.stringify(props.play, null, 2)}
        </pre>
      </Dialog>
  );
};

const {
  arrayOf, number, string, shape, func, bool,
} = PropTypes;


PlayDetailsDialog.propTypes = {
  onCancel: func.isRequired,
  show: bool.isRequired,
  play: shape({
    id: number.isRequired,
    date: string.isRequired,
    note: string,
    results: arrayOf(shape({
      position: number.isRequired,
      opponentName: string.isRequired,
      id: number,
      points: number,
    })),
  }),
};


export default PlayDetailsDialog;
