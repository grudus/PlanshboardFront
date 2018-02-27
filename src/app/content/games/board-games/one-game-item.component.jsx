import React from 'react';
import PropTypes from 'prop-types';
import './single-game/single-game.component.css';

const displayName = (name, len = 25) => (name.length > len ? `${name.substring(0, len)}...` : name);

const OneGameItem = props => (
  <div
    className="game-single-item card-shadow card pointer anim white accent-border"
    onClick={() => props.onClick(props.game)}
  >
    <p className="game-single-label">{displayName(props.game.name)}</p>
  </div>
);

OneGameItem.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default OneGameItem;
