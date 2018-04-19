import React from 'react';
import { Dialog, FlatButton } from 'material-ui';
import { func, bool, shape, number, string, arrayOf } from './../../../../commons/ExtractedPropTypes';
import PositionMedal from '../../position/PositionMedalComponent';
import { dateFormat } from '../../../../commons/DateUtils';

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

      <h3>Data: {dateFormat(props.play.date)}</h3>

      <ul>
        {props.play.results.map(result => (
          <li key={result.id}>
            <PositionMedal position={result.position} />

            {`${result.opponentName}: ${result.points}`}
          </li>
                ))}
      </ul>


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
