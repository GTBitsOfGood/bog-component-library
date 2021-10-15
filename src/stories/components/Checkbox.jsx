import React from 'react'
import PropTypes from 'prop-types'
import '../css/Checkbox.css'

export const Checkbox = ({ label, isChecked, isDisabled, isIndeterminate, onChange, ...props}) => {
    const classs = "checkbox" + (isChecked? "-checked":"") + (isDisabled? "-disabled": "") + (isIndeterminate? "-indeterminate":"")
    return (
        <label>
          <input id="checkbox" className={classs} type="checkbox" checked={isChecked} disabled={isDisabled} indeterminate={isIndeterminate} onChange={onChange} {...props}/>
          {label}
        </label>
      );
};

Checkbox.propTypes = {
    label: PropTypes.string,
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isIndeterminate: PropTypes.bool,
    onChange: PropTypes.func,
    
}

Checkbox.defaultProps = {
    label: "this is a checkbox",
    isChecked: false,
    isDisabled: false,
    isIndeterminate: false,
    onChange: undefined,
}