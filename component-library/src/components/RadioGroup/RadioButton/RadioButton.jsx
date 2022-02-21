import React from 'react';
import PropTypes from 'prop-types';
import './radio-button.css';

 const RadioButton = ({ groupName, value, label, isDisabled, isChecked, id }) => {
    const disableStyle = isDisabled && "disable-button"
    return(
        <label className={`radio-container ${disableStyle}`}>
            <input type="radio" id={id} name={groupName} value={value} disabled={isDisabled} checked={isChecked}/>
            <span className={`selection ${disableStyle}`}></span>
            <span className="labelText">{label}</span>
        </label>
    )
}

// RadioButton.propTypes = {
//     /*
//      * Radio button group
//      */
//     groupName: PropTypes.string,
//     /*
//      * Value of radio button
//      */
//     value: PropTypes.string,
//     /*
//      * Radio button label
//      */
//     label: PropTypes.string,
//     /*
//      * Disabled radio button
//      */
//     isDisabled: PropTypes.bool,
//      /*
//      * Checked radio button
//      */
//     isChecked: PropTypes.bool
// }

// RadioButton.defaultProps = {
//     groupName: "radioGroup",
//     inputValue: undefined,
//     label: 'Label',
//     isDisabled: false,
// }

export default RadioButton;