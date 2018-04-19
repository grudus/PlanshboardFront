import React from 'react';
import { findColor } from './opponentsColors';
import { arrayOf, shape, number, string } from '../../../../commons/ExtractedPropTypes';

const OpponentsCell = ({ results }) => {
  const opponentsDom = ({ position, opponentName }) => (
    <span className="opponent" key={opponentName}>
      {position > 0 && <div className="opponent-position" style={{ background: findColor(position) }}>{position}</div> }
      <div className="opponent-name">{opponentName}</div>
    </span>
  );

  return (
    <div className="opponent-wrapper">
      {results.map(a => opponentsDom(a))}
    </div>
  );
};

OpponentsCell.propTypes = {
  results: arrayOf(shape({
    position: number.isRequired,
    points: number,
    opponentName: string.isRequired,
  })).isRequired,
};

export default OpponentsCell;
