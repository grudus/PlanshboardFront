import React from 'react';
import PropTypes from 'prop-types';
import { muiThemeable } from 'material-ui/styles/index';
import ClickableIcon from '../../../commons/ClickableIconComponent';

const displayName = (name, len = 25) => (name.length > len ? `${name.substring(0, len)}...` : name);

const OneGameItem = (props) => {
  const color = props.muiTheme.palette.lightGrayColor;
  const hoverColor = props.muiTheme.palette.darkTextColor;

  return (
    <div
      className="game-single-item card-shadow card pointer anim white accent-border relative"
      onClick={() => props.onClick(props.game)}
    >
      <p className="game-single-label">{displayName(props.game.name)}</p>

      <div className="game-single-icons flex absolute bottom-right">
        <ClickableIcon name="delete" hoverColor={hoverColor} color={color} onClick={props.onDeleteClick} />
        <ClickableIcon name="edit" hoverColor={hoverColor} color={color} onClick={props.onEditClick} />
      </div>
    </div>
  );
};

OneGameItem.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default muiThemeable()(OneGameItem);
