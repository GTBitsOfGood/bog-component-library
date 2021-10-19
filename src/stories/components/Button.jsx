import React from 'react';
import PropTypes from 'prop-types';
import '../css/button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant, backgroundColor, label, icon, iconPosition, ...props }) => {

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${variant}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      <div className='button-content'>
        {icon && iconPosition == 'left' ? <img className='button-icon--left' src={icon}></img> : ''}
        {label}
        {icon && iconPosition == 'right' ? <img className='button-icon--right' src={icon}></img> : ''}
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
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  variant: 'primary',
  icon: 'https://img.icons8.com/material-outlined/24/ffffff/search--v1.png',
  onClick: undefined,
};
