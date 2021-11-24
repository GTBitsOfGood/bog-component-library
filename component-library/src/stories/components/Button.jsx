import React from 'react';
import PropTypes from 'prop-types';
import '../css/button.css';

/**
 * Primary UI component for user interaction
 */
<<<<<<< HEAD
 const Button = ({ variant, backgroundColor, label, icon, iconPosition, isDisabled, ...props }) => {
  const newLocal = isDisabled && 'disabled';
=======
export const Button = ({ variant, backgroundColor, label, icon, iconPosition, isDisabled, size, ...props }) => {
>>>>>>> 9554294e933c93e55d16f2c68791a97647202371
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${variant}`, `storybook-button--${size}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      disabled={isDisabled}
      {...props}
    >
      <div className='button-content'>
        {icon && iconPosition === 'left' ? <img className='button-icon--left' src={icon}></img> : ''}
        {label}
        {icon && iconPosition === 'right' ? <img className='button-icon--right' src={icon}></img> : ''}
      </div>
    </button>
  );
};

Button.propTypes = {
  /**
   * Primary, secondary or teriary button.
   */
  variant: PropTypes.string.isRequired,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /*
   * Icon file
   */
  icon: PropTypes.string,
  /*
   * Icon position
   */
  iconPosition: PropTypes.string,
  /*
   * Disable button
   */
  isDisabled: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  size: PropTypes.string.isRequired,
};

Button.defaultProps = {
  backgroundColor: null,
  variant: 'primary',
  icon: 'https://img.icons8.com/material-outlined/24/ffffff/search--v1.png',
  isDisabled: false,
  onClick: undefined,
  size: 'large'
};

export default Button;