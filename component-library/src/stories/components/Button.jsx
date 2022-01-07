import React from 'react';
import PropTypes from 'prop-types';
import '../css/button.css';

const Button = ({ variant, backgroundColor, label, hasIcon, icon, iconPosition, isDisabled, size, ...props }) => {
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${variant}`, `storybook-button--${size}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      disabled={isDisabled}
      {...props}
    >
      <div className='button-content' >
        {hasIcon && iconPosition === 'left' && React.cloneElement(icon, {className: 'button-icon--left'})}
        {label}
        {hasIcon && iconPosition === 'right' && React.cloneElement(icon, {className: 'button-icon--right'})}
      </div>
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  hasIcon: PropTypes.bool,
  icon: PropTypes.element,
  iconPosition: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

Button.defaultProps = {
  backgroundColor: null,
  hasIcon: false,
  icon: <img src='https://img.icons8.com/material-outlined/24/ffffff/search--v1.png' alt='search-icon'/>,
  iconPosition: 'right',
  isDisabled: false,
  label: 'Button',
  onClick: undefined,
  size: 'large',
  variant: 'primary'
};

export default Button;