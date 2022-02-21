import React from 'react';
import PropTypes from 'prop-types';
import './radio-button.css';
import RadioButton from './RadioButton/RadioButton';

 const RadioButton = ({ groupName, buttons }) => {
    
    return(
        <div>
            {buttons.map((button, index) => {
                return <RadioButton
                    groupName={groupName}
                    value={button.value}
                    label={button.label}
                    isDisabled={button.disabled}
                    isChecked={button.checked}
                    id={index}/>
            })}
        </div>
    )
}

RadioButton.propTypes = {
}

RadioButton.defaultProps = {
}

export default RadioButton;