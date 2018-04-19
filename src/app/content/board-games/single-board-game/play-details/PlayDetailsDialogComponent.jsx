import React from 'react';
import { Dialog, FlatButton } from 'material-ui';
import { func, bool, shape, number, string, arrayOf } from './../../../../commons/ExtractedPropTypes';

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
