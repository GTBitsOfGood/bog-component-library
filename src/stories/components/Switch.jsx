import React from 'react';
import PropTypes from 'prop-types';
import '../css/switch.css';

export const Switch = ({ primary, backgroundColor, label, ...props }) => {
    
  if (primary) {
    return (
      <div className="switch-container">
        <label className="toggle-switch">
            <input type="checkbox" />
            <span className="switch" />
        </label>
        {label}
      </div>
    );
  } else {
    return (
      <label className="toggle-switch">
          <input type="checkbox" />
          <span className="switch" />
      </label>
    );
  }
};

Switch.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,

  /**
   * Switch Label
   */
  label: PropTypes.string,

};

Switch.defaultProps = {
  backgroundColor: null,
  primary: false,
};
