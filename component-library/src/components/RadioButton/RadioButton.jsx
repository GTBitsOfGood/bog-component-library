import React from 'react';
import PropTypes from 'prop-types';
import './radio-button.css';

 const RadioButton = ({ groupName, value, label, isDisabled, isChecked, id }) => {
    let disableStyle = "";
    if (isDisabled) {
        disableStyle = "disable-button";
    }
    
    return(
        <label className={`radio-container ${disableStyle}`}>
            <input type="radio" id={id} name={groupName} value={value} disabled={isDisabled} checked={isChecked}/>
            <span className={`selection ${disableStyle}`}></span>
            <p className={disableStyle != "" ? `${disableStyle}-text` : `labelText`}>{label}</p>
        </label>
    )
}

export default RadioButton;