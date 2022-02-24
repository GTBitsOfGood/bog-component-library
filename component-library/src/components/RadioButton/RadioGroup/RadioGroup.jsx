import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './radio-group.css';
import RadioButton from '../RadioButton';

 const RadioGroup = ({ groupName, buttons, defaultSelection }) => {
    const [currButtons, setCurrentButtons] = useState(buttons);

    const setDefaultSelection = () => {
        let btns = currButtons
        if (defaultSelection >= 0 && defaultSelection < buttons.length) {
            for (let i = 0; i < btns.length; i++) {
                let btn = JSON.parse(JSON.stringify(btns[i])); //deep copy of button object
                if (i == defaultSelection) {
                    btn.isChecked = true
                } else {
                    btn.isChecked = false
                }
                btns[i]=btn
            }
            setCurrentButtons(btns)
            return currButtons[defaultSelection]
        } else {
            return null
        }
    }

    const [currSelection, setCurrSelection] = useState(setDefaultSelection);
    
    const handleChange = (event) => {
        if (currSelection != null && currSelection.isDisabled) {
            return
        }

        let newButtons = new Array(currButtons.length)

        for (let i = 0; i < currButtons.length; i++){

            let btn = JSON.parse(JSON.stringify(currButtons[i])); //deep copy of button object

            if (i == event.target.id) {

              if (currButtons[i].isDisabled == true) {
                newButtons[i] = btn
              } else {
                btn.isChecked = true
                newButtons[i] = btn
                setCurrSelection(btn)
              }

            } else {
                btn.isChecked = false
                newButtons[i] = btn
            }
          }

        setCurrentButtons(newButtons)
    }

    return(
        <div className='radio-group-container' onChange={handleChange}>
            {currButtons.map((button, index) => {
                return(
                    <div key={index} >
                        < RadioButton groupName={groupName}
                            value={button.value}
                            label={button.label}
                            isDisabled={button.isDisabled}
                            isChecked={button.isChecked}
                            id={index}
                        />
                    </div>
                )}
            )}
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
    /*
     * Value of radio button
     */
    defaultSelection: PropTypes.number,
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
    ],
    defaultSelection: -1,
}

export default RadioGroup;