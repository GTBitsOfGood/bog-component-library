import React from 'react';
import PropTypes from 'prop-types';
import '../css/tooltip.css';

export const Tooltip = ({ size, text, style,...props }) => {

    return (
        <div className={`tooltip-container tooltip--${size} style--${style}`}>
            <span className={`tooltip-text tooltip-arrow tooltip-arrow--${style}`}>{text}</span>
        </div>
    );
};

Tooltip.propTypes = {
    /*
     * Displayed text
     */
    text: PropTypes.string,
    /*
     * Tooltip size
     */
    size: PropTypes.string,
    /*
     * Tooltip color style
     */
    style: PropTypes.string,
}

Tooltip.defaultProps = {
    text: "tooltip",
    size: "large",
    style: "dark",
}