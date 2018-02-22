import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LandingItem = ({ label, path, icon }) => (
  <Link to={path} style={{ textDecoration: 'none' }}>
    <div className="landing-item card-shadow pointer anim">
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

export default LandingItem;
