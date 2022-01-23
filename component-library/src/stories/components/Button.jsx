import React from 'react';
import PropTypes from 'prop-types';
import '../css/button.css';

const Button = ({ backgroundColor, hasIcon, icon, iconPosition, isDisabled, label, onClick, size, variant, ...props }) => {
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${variant}`, `storybook-button--${size}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      disabled={isDisabled}
      {...props}
      onClick={onClick}
    >
      <div className={`button-content${iconPosition === 'right' ? '--right' : '--left'}`}>
        {label}
        {hasIcon && React.cloneElement(icon, {className: `button-icon${iconPosition === 'right' ? "--right" : '--left'}`})}
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
  label: "Button",
  onClick: undefined,
  size: 'large',
  variant: 'primary'
};

export default Button;