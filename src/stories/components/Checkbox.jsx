import React from 'react'
import PropTypes from 'prop-types'
import '../css/Checkbox.css'

export const Checkbox = ({ label, isDisabled, isIndeterminate, onChange, ...props}) => {
    const classs = "checkbox" + (isDisabled? "-disabled": "") + (isIndeterminate? "-indeterminate":"")
    return (
        <label>
          <input 
            id="checkbox" 
            className={classs} 
            type="checkbox" 
            disabled={isDisabled} 
            indeterminate={isIndeterminate} 
            onChange={onChange} 
            {...props}
          />
          {label}
        </label>
      );
};

Checkbox.propTypes = {
    label: PropTypes.string,
    isDisabled: PropTypes.bool,
    isIndeterminate: PropTypes.bool,
    onChange: PropTypes.func,  
}

Checkbox.defaultProps = {
    label: "this is a checkbox",
    isDisabled: false,
    isIndeterminate: false,
    onChange: undefined,
}