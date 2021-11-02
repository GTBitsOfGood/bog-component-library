import React from 'react'
import PropTypes from 'prop-types'
import '../css/checkbox.css'

export const Checkbox = ({ label, isDisabled, isIndeterminate, hasLabel, onChange, ...props}) => {
    const classes = "checkbox" + (isDisabled ? "-disabled" : "") + (isIndeterminate ? "-indeterminate" : "") + (hasLabel ? "-hasLabel" : "")
    return (
        <label className="container">
          <input 
            id="checkbox" 
            className={classes} 
            type="checkbox" 
            disabled={isDisabled} 
            ref={(el) => {
              if (el) {
                el.indeterminate = isIndeterminate;
              }
            }}
            onChange={onChange} 
            {...props}
          />
          <span className="checkmark"></span>
          {hasLabel && <span className="labelText">{label}</span>}
        </label>
      );
};

Checkbox.propTypes = {
    label: PropTypes.string,
    hasLabel: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isIndeterminate: PropTypes.bool,
    onChange: PropTypes.func,  
}

Checkbox.defaultProps = {
    label: "Label",
    hasLabel: false,
    isDisabled: false,
    isIndeterminate: false,
    onChange: undefined,
}