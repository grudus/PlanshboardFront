import React from 'react';
import PropTypes from 'prop-types';
import './single-game.component.css';

const displayName = (name, len = 25) => (name.length > len ? `${name.substring(0, len)}...` : name);

const SingleItem = props => (
  <div className="game-single-item card-shadow card pointer anim white accent-border">
    <p className="game-single-label">{displayName(props.name)}</p>
  </div>
);

SingleItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SingleItem;
