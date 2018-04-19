import React from 'react';
import { muiThemeable } from 'material-ui/styles/index';
import { shape, number, string, func } from '../../../commons/ExtractedPropTypes';
import ClickableIcon from '../../../commons/ClickableIconComponent';

const displayName = (name, len = 25) => (name.length > len ? `${name.substring(0, len)}...` : name);

const OneGameItem = (props) => {
  const color = props.muiTheme.palette.lightTextColor;
  const hoverColor = props.muiTheme.palette.textColor;

  return (
    <div
      className="game-single-item card-shadow card-background pointer anim accent-border relative"
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
  game: shape({
    id: number.isRequired,
    name: string.isRequired,
  }).isRequired,
  onClick: func.isRequired,
  onEditClick: func.isRequired,
  onDeleteClick: func.isRequired,
};

export default muiThemeable()(OneGameItem);
