import React from 'react';
import PropTypes from 'prop-types';
import { findColor } from './opponentsColors';

const OpponentsCell = ({ results }) => {
  const opponentsDom = ({ position, opponentName }) => (
    <span className="opponent" key={opponentName}>
      <div className="opponent-position" style={{ background: findColor(position) }}>{position}</div>
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
  results: PropTypes.arrayOf(PropTypes.shape({
    position: PropTypes.number.isRequired,
    points: PropTypes.number,
    opponentName: PropTypes.string.isRequired,
  })).isRequired,
};

export default OpponentsCell;
