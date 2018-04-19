import React from 'react';
import { arrayOf, shape, number, string } from '../../../../commons/ExtractedPropTypes';
import PositionMedal from '../../position/PositionMedalComponent';

const OpponentsCell = ({ results }) => {
  const opponentsDom = ({ position, opponentName }) => (
    <span className="opponent" key={opponentName}>
      <PositionMedal position={position} />
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
