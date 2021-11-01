import React from 'react';
import PropTypes from 'prop-types';
import '../css/radio-button.css';

export const RadioButton = ({ groupName, inputValue, label, isDisabled }) => {
    const disableLabel = isDisabled && "radio--label-disabled"
    return(
        <div>
            <input type="radio" name={groupName} value={inputValue} disabled={isDisabled}/>
            <label className={`radio--label ${disableLabel}`}>{label}</label>
        </div>
    )
}

RadioButton.propTypes = {
    /*
     * Radio button group
     */
    groupName: PropTypes.string,
    /*
     * Value of button
     */
    inputValue: PropTypes.string,
    /*
     * Button label
     */
    label: PropTypes.string,
    /*
     * Button label
     */
    isDisabled: PropTypes.bool,
}

RadioButton.defaultProps = {
    groupName: "radioGroup",
    inputValue: undefined,
    label: 'Label',
    isDisabled: false,
}