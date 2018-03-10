import React from 'react';
import PropTypes from 'prop-types';
import { findColor } from './opponentsColors';

const OpponentsCell = ({ opponents }) => {
  const opponentsDom = ({ position, name }) => (
    <span className="opponent" key={name}>
      <div className="opponent-position" style={{ background: findColor(position) }}>{position}</div>
      <div className="opponent-name">{name}</div>
    </span>
  );

  return (
    <div className="opponent-wrapper">
      {opponents.map(a => opponentsDom(a))}
    </div>
  );
};

OpponentsCell.propTypes = {
  opponents: PropTypes.arrayOf(PropTypes.shape({
    position: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default OpponentsCell;
