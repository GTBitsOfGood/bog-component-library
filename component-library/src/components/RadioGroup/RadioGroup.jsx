import React from 'react';
import PropTypes from 'prop-types';
import './radio-group.css';
import RadioButton from './RadioButton/RadioButton';

 const RadioGroup = ({ groupName, buttons }) => {
    
    return(
        <div>
            {buttons.map((button, index) => {
                return (<RadioButton
                    groupName={groupName}
                    value={button.value}
                    label={button.label}
                    isDisabled={button.disabled}
                    isChecked={button.checked}
                    id={index} />)
            })}
        </div>
    )
}

RadioGroup.propTypes = {
    /*
     * Radio button group
     */
    groupName: PropTypes.string,
    /*
     * Value of radio button
     */
    buttons: PropTypes.array,
}

RadioGroup.defaultProps = {
    groupName: "group",
    buttons: [
        {
            value: "radio1",
            label: "Radio button 1",
            isDisabled: false,
            isChecked: false
        },
        {
            value: "radio2",
            label: "Radio button 2",
            isDisabled: false,
            isChecked: false
        },
    ]
}

export default RadioButton;