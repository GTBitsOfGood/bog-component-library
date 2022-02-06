import React from 'react';
import PropTypes from 'prop-types';
import '../css/tooltip.css';

export const Tooltip = ({ size, text, style, arrowDirection, arrowPosition, ...props }) => {

    let orientation;
    if (arrowDirection == 'top' || arrowDirection == 'bottom') {
        orientation = 'horizontal'
    } else {
        orientation = 'vertical'
    }

    return (
        <div className={`tooltip-container tooltip--${size} style--${style}`}>
            {text}
            <span className={`
                tooltip-arrow--${orientation}
                tooltip-arrow--${style}-${arrowDirection}
                tooltip-position--${orientation}-${arrowPosition}`}></span>
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
    /*
     * Direction that tooltip arrow points towards
     */
    arrowDirection: PropTypes.string,
    /*
     * Arrow's position on the edge of tooltip box
     */
    arrowPosition: PropTypes.string,
}

Tooltip.defaultProps = {
    text: "tooltip",
    size: "large",
    style: "dark",
    arrowDirection: "bottom",
    arrowPosition: "2",
}