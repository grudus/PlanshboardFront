import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom";

const TopBarItem = (props) => (
    <Link to={props.path} className="single-item pointer" onClick={props.onClick ? props.onClick : () => {}}>
        <img src={props.icon} className="single-item-icon icon" alt={props.label}/>
        <p className="single-item-text">{props.label}</p>
    </Link>
);

TopBarItem.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default TopBarItem;