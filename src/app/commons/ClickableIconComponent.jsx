import React from 'react';
import { FontIcon } from 'material-ui';
import PropTypes from 'prop-types';

const ClickableIcon = props => (

  <FontIcon
    className="material-icons"
    hoverColor={props.hoverColor}
    color="#424242"
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
};

ClickableIcon.defaultProps = {
  hoverColor: '',
  onClick: () => {
  },
};

export default ClickableIcon;
