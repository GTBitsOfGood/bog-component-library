import React from 'react';
import PropTypes from 'prop-types';
import '../css/button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant, backgroundColor, label, ...props }) => {

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${variant}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
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
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  variant: 'primary',
  onClick: undefined,
};
