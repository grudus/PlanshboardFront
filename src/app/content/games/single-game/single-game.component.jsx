import React from 'react';
import { muiThemeable } from 'material-ui/styles/index';
import PropTypes from 'prop-types';
import './single-game.component.css';

const SingleItem = props => (
  <li className="no-li">
    <div className="game-single-item card-shadow card pointer anim" style={{ borderTop: `5px solid ${props.muiTheme.palette.accent1Color}` }}>
      <p className="game-single-label">{props.name}</p>
    </div>
  </li>
);

SingleItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default muiThemeable()(SingleItem);
