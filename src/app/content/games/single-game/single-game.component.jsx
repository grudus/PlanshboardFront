import React from 'react';
import PropTypes from 'prop-types';

const SingleItem = props => (
  <li className="no-li">
    <div className="game-single-item">
      <h5>{props.name}</h5>
    </div>
  </li>
);

SingleItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SingleItem;
