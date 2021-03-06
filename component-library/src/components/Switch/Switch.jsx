import React from 'react';
import PropTypes from 'prop-types';
import './switch.css';

 const Switch = ({ disabled, hasLabel, label, ...props }) => {
  
  return (
      <div className="switch-container">
        {hasLabel && <span className="labelText">{label}</span>}
        <label className="toggle-switch">
            <input disabled={disabled} type="checkbox" data-testid="switch"/>
            <span className="switch" />
        </label>
      </div>
    );
};

Switch.propTypes = {
  hasLabel: PropTypes.bool,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

Switch.defaultProps = {
  hasLabel: false,
  disabled: false,
  label: "Toggle"
};

export default Switch;