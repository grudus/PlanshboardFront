import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import muiThemeable from 'material-ui/styles/muiThemeable';

const LandingItem = ({
  label, path, icon, muiTheme,
}) => (
  <Link to={path} style={{ textDecoration: 'none' }}>
    <div className="landing-item card-shadow pointer anim" style={{ background: muiTheme.palette.primary1Color }}>
      <h2 className="landing-item-title">
        {label.toUpperCase()}
      </h2>
      <img src={icon} className="landing-item-image icon" alt={label} />
    </div>
  </Link>
);


LandingItem.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default muiThemeable()(LandingItem);
