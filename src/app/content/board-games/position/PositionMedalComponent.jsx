import React from 'react';
import { findColor } from '../single-board-game/plays-table/opponentsColors';
import { number } from '../../../commons/ExtractedPropTypes';
import './position.scss';

const PositionMedal = ({ position }) => (
  position > 0
  && (
  <div className="position" style={{ background: findColor(position) }}>
    {position}
  </div>
  )
);

PositionMedal.propTypes = {
  position: number.isRequired,
};

export default PositionMedal;
