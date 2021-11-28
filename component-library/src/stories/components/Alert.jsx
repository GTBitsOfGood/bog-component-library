import React from 'react';
import PropTypes from 'prop-types';
import '../css/alert.css';

/**
 * Primary UI component for user interaction
 */
  const Alert = ({backgroundColor, alertText, url, ...props }) => {
    return (
      <div
        type="alert"
        className={['storybook-alert', `storybook-alert--${url}`].join(' ')}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        <a href={url}>{(alertText == null || alertText === '') ? url : alertText}</a>
        <button style={backgroundColor && { backgroundColor }}>
            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/orangutan_1f9a7.png" alt='exit alert'></img>
        </button>
      </div>
    );
  };
  
  Alert.propTypes = {
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * Alert message
     */
    alertText: PropTypes.string,
    /**
     * Alert link
     */
    url: PropTypes.string.isRequired,
  };
  
  Alert.defaultProps = {
    backgroundColor: 'rgba(205, 242, 214, 1)',
    alertText: 'Nice, you triggered this alert message!', 
    url: 'https://youtu.be/dQw4w9WgXcQ',
  };

export default Alert;