import React from 'react';
import PropTypes from 'prop-types';
import {useState} from "react";
import '../css/input.css';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ variant, label, placeholder, leftIcon, rightIcon, isDisabled, rows, cols, error, success, onChange, ...props }) => {
  const [input, setInput] = useState(null);
  const handleChange =(newValue)=>{    
    setInput(newValue);
    console.log(newValue); 
  }
  return (  
    <div className={'storybook-input-div'}>
      <label className={'storybook-input-label'}>{label}</label>
      {variant === 'textArea'? 
      (<textarea
        className={['storybook-input','storybook-input--' + (isDisabled? 'disabled':''),'storybook-input--' + (error?'error':''), 'storybook-input--' + (success?'success':''),`storybook-input--${variant}`].join(' ')}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={isDisabled}
        rows={rows}
        cols={cols}
        {...props}
      />):
      (
      <div 
      className={['storybook-input','storybook-input--' + (isDisabled? 'isDisabled':''),'storybook-input--' + (error?'error':''), 'storybook-input--' + (success?'success':''), `storybook-input--${variant}`].join(' ')}
      >
        {(variant === "leftIcon" ||  variant==="doubleIcon" ) && leftIcon ? <img className='input-icon--left' src={leftIcon}></img> : ''}
        <input
          type="text"
          onChange={handleChange}
          placeholder={placeholder}
          disabled={isDisabled}
          {...props}
        />
        {(variant === "rightIcon" ||  variant==="doubleIcon" ) && rightIcon ? <img className='input-icon--right' src={rightIcon}></img> : ''}
      </div>
      )}
      {error === true && 
      (<div className={'storybook-input-label-error'}>
        <img className={'img-message'} src="https://img.icons8.com/emoji/48/000000/red-circle-emoji.png"/>
        <label>Error Message</label>
      </div>)}
      {success === true && 
      (<div className={'storybook-input-label-success'}>
        <img className={'img-message'} src="https://img.icons8.com/emoji/48/000000/green-circle-emoji.png"/>
        <label>Success Message</label>
      </div>)}
    </div>
  );
};
Input.propTypes = {
  /**
   * Primary, secondary or teriary button.
   */
  variant: PropTypes.string.isRequired,
  /**
   * Input Label
   */
  label: PropTypes.string.isRequired,
  /**
   * Input Placeholder text
   */
   placeholder: PropTypes.string,
  /*
   * Left Icon file
   */
  leftIcon: PropTypes.string,
    /*
   * Right Icon file
   */
  rightIcon: PropTypes.string,
  /*
   * Disable Input
   */
  isDisabled: PropTypes.bool,
  /*
  * Number of rows in textarea
  */
  rows: PropTypes.number,
  /*
  * Number of cols in textarea
  */
  cols: PropTypes.number,
  /*
  * input cause error
  */
  error: PropTypes.bool,
  /*
  * input was successfull
  */
  success:PropTypes.bool,
  /**
   * Optional click handler
   */
  onChange: PropTypes.func,
};

Input.defaultProps = {
  variant: 'regular',
  label: 'Label',
  placeholder: 'placeholder text',
  isDisabled: false,
  error: false, 
  success: false,
  leftIcon: 'https://img.icons8.com/material-outlined/24/000000/planner.png',
  rightIcon: 'https://img.icons8.com/material-rounded/24/000000/chevron-down.png',
};
