import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import muiThemeable from 'material-ui/styles/muiThemeable';

const TopBarItem = (props) => {
  const style = props.isCurrent ? { borderBottom: `3px solid ${props.muiTheme.palette.accentColor}` } : {};
  return (
    <Link
      to={props.path}
      className={`single-item pointer ${props.isCurrent ? 'current' : ''}`}
      onClick={props.onClick}
      style={style}
    >
      <img src={props.icon} className="single-item-icon icon" alt={props.label} />
      <p className="single-item-text">{props.label}</p>
    </Link>
  );
};

TopBarItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isCurrent: PropTypes.bool,
};

TopBarItem.defaultProps = {
  onClick: () => {
  },
  isCurrent: false,
};

export default muiThemeable()(TopBarItem);
