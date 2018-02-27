import React from 'react';
import { FontIcon } from 'material-ui';
import PropTypes from 'prop-types';

const AddGame = props => (
  <div className="game-single-item pointer anim add-game-item card-shadow">
        Dodaj grę
    <FontIcon
      className="material-icons add-single-label"
      color={props.iconColor}
      style={{ fontSize: '1.5em' }}
    >add_circle_outline
    </FontIcon>
  </div>
);

AddGame.propTypes = {
  iconColor: PropTypes.string.isRequired,
};

export default AddGame;
