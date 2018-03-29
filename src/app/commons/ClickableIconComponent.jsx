import React from 'react';
import { FontIcon } from 'material-ui';
import PropTypes from 'prop-types';

const ClickableIcon = props => (

  <FontIcon
    className="material-icons"
    hoverColor={props.hoverColor}
    color={props.color}
    style={{ cursor: 'pointer' }}
    onClick={props.onClick}
  >
    {props.name}
  </FontIcon>

);

ClickableIcon.propTypes = {
  hoverColor: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
};

ClickableIcon.defaultProps = {
  hoverColor: '',
  color: '#424242',
  onClick: () => {
  },
};

export default ClickableIcon;
