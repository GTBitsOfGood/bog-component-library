import React from 'react';
import PropTypes from 'prop-types';
import '../css/radio-button.css';

export const RadioButton = ({ groupName, value, label, isDisabled }) => {
    const disableStyle = isDisabled && "disable-button"
    return(
        <label className={`radio-container ${disableStyle}`}>
            <input type="radio" name={groupName} value={value} disabled={isDisabled} />
            <span className={`selection ${disableStyle}`}></span>
            <span className="labelText">{label}</span>
        </label>
    )
}

RadioButton.propTypes = {
    /*
     * Radio button group
     */
    groupName: PropTypes.string,
    /*
     * Value of radio button
     */
    value: PropTypes.string,
    /*
     * Radio button label
     */
    label: PropTypes.string,
    /*
     * Disabled radio button
     */
    isDisabled: PropTypes.bool,
}

RadioButton.defaultProps = {
    groupName: "radioGroup",
    inputValue: undefined,
    label: 'Label',
    isDisabled: false,
}