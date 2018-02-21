import React from "react"
import PropTypes from "prop-types"

const LandingItem = ({label, path, icon}) => (
    <div className="landing-item">
        <h2 className="landing-item-title">
            {label.toUpperCase()}
        </h2>
        <img src={icon} className="landing-item-image"/>
    </div>
);


LandingItem.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
};

export default LandingItem;