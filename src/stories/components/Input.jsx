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
      {error && 
      (<div className={'storybook-input-label-error'}>
        {/* error icon */}
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="20" height="20"
          viewBox="0 0 172 172"
          style={{fill: "rgba(255, 57, 57, 1)"}}>
          <path d="M0,172v-172h172v172z" fill="none"></path>
          <path d="M86,17.2c-4.76766,0 -8.85191,2.90522 -10.58203,
                  7.04349l-62.22682,107.32084v0.0112c-1.12304,1.80909 -1.72017,
                  3.89516 -1.72448,6.02448c0,6.33287 5.1338,11.46667 11.46667,
                  11.46667c0.26906,-0.00173 0.53798,-0.01294 0.80625,-0.03359l0.0224,
                  0.03359h62.23802h62.23802l0.02239,-0.04479c0.26814,0.02439 0.53706,
                  0.03933 0.80625,0.04479c6.33287,0 11.46667,-5.1338 11.46667,
                  -11.46667c-0.00223,-2.13313 -0.59944,-4.22335 -1.72448,
                  -6.03567l-0.08958,-0.15677c-0.00373,-0.00373 -0.00746,-0.00747 -0.0112,
                  -0.0112l-62.12604,-107.15287c-1.73013,-4.13827 -5.81437,-7.04349 -10.58203,
                  -7.04349zM79.04609,65.12708h13.90782l-1.15339,37.10989h-11.60104zM86.02239,
                  113.58047c4.7128,0 7.5362,2.53566 7.5362,6.86432c0,4.2484 -2.8234,6.77474 -7.5362,
                  6.77474c-4.7472,0 -7.59218,-2.52634 -7.59218,-6.77474c0,-4.32866 2.83925,
                  -6.86432 7.59218,-6.86432z">
          </path>
          </svg>
        <label className="alert-message">Error Message</label>
      </div>)}
      {success && 
      (<div className={'storybook-input-label-success'}>
        {/* success icon */}
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 30 30"
            style={{fill: "rgba(19, 180, 97, 1)"}}>    
            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,
            8.373,21.627,3,15,3z M21.707,12.707l-7.56,7.56 c-0.188,0.188-0.442,0.293-0.707,
            0.293s-0.52-0.105-0.707-0.293l-3.453-3.453c-0.391-0.391-0.391-1.023,
            0-1.414s1.023-0.391,1.414,0 l2.746,2.746l6.853-6.853c0.391-0.391,1.023-0.391,1.414,
            0S22.098,12.316,21.707,12.707z"></path></svg>
        <label className="alert-message">Success Message</label>
      </div>)}
    </div>
  );
};
Input.propTypes = {
  /**
   * regular, leftIcon, rightIcon, doubleIcon, textArea input
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
  /** 
   * Left Icon file
   */
  leftIcon: PropTypes.string,
  /**
   * Right Icon file
   */
  rightIcon: PropTypes.string,
  /**
   * Disable Input
   */
  isDisabled: PropTypes.bool,
  /**
   * Number of rows in textarea
   */
  rows: PropTypes.number,
  /**
   * Number of columns in textarea
   */
  cols: PropTypes.number,
  /**
   * Input cause error
   */
  error: PropTypes.bool,
  /**
   * Input was successfull
   */
  success:PropTypes.bool,
  /**
   * Optional Input handler
   */
  onChange: PropTypes.func,
};

Input.defaultProps = {
  variant: 'regular',
  label: 'Label',
  placeholder: 'Placeholder text',
  isDisabled: false,
  error: false, 
  success: false,
  leftIcon: 'https://img.icons8.com/material-outlined/24/000000/planner.png',
  rightIcon: 'https://img.icons8.com/material-rounded/24/000000/chevron-down.png',
};
