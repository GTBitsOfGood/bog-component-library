import React from 'react';
import PropTypes from 'prop-types';
import '../css/tooltip.css';

export const Tooltip = ({ size, text, ...props }) => {

    return (
        <div className="tooltip">
            <span className="tooltiptext">{text}</span>
        </div>
    );
};

Tooltip.propTypes = {
    /*
     * Displayed text
     */
    text: PropTypes.string,
}

Tooltip.defaultProps = {
    text: "tooltip",
}