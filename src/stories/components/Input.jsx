import React from 'react';
import PropTypes from 'prop-types';
import {useState} from "react";
import '../css/input.css';
import { icon } from '@fortawesome/fontawesome-svg-core';

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
        value={input}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={isDisabled}
        rows={rows}
        cols={cols}
        {...props}
      />):
      (<input
        className={['storybook-input','storybook-input--' + (isDisabled? 'isDisabled':''),'storybook-input--' + (error?'error':''), 'storybook-input--' + (success?'success':''), `storybook-input--${variant}`].join(' ')}
        type="text"
        value={input}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={isDisabled}
        {...props}
      />)}
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
    
    // <button
    //   type="button"
    //   className={['storybook-button', `storybook-button--${variant}`].join(' ')}
    //   style={backgroundColor && { backgroundColor }}
    //   disabled={isDisabled}
    //   {...props}
    // >
    //   <div className='button-content'>
    //     {icon && iconPosition == 'left' ? <img className='button-icon--left' src={icon}></img> : ''}
    //     {label}
    //     {icon && iconPosition == 'right' ? <img className='button-icon--right' src={icon}></img> : ''}
    //   </div>
    // </button>
  );
};
// renderSwitch(variant){
//   switch(variant){
//     case 'leftIcon':
//       return (<i class="search icon"></i>);
//     case 'rightIcon':
//       return (<i class="close icon" style="left: auto; right: 1px"></i>);
//     case 'doubleIcon':
//       return (<div>
//         <i class="search icon"></i>
//         <i class="close icon" style="left: auto; right: 1px"></i>
//       </div>);
//     default:
//       return;
//   }
// };
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
};
