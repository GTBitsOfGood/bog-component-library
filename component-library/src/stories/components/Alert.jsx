import React from 'react';
import PropTypes from 'prop-types';
import '../css/alert.css';
import { Button } from './Button.jsx';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
// import { faInfoCircle, faExclamationTriangle, faCheckCircle, faTimes } from '@fontawesome/free-solid-svg-icons'
// example: import Flow from './assets/flow.svg';
import Times from '../assets/times.svg';
import InfoCircleBrand from '../assets/infoCircleBrand.svg';
import InfoCircleMessage from '../assets/infoCircleMessage.svg';
import CheckCircleSuccess from '../assets/checkCircleSuccess.svg';
import ExclamationTriangleFailure from '../assets/exclamationTriangleFailure.svg';

/**
 * Props: backgroundColor: str, borderColor: str, alertText: str, 
 * hasButton: bool + buttonText: str, hasHeader: bool + headerText: str, size: str, textColor: str
 */
const Alert = ({iconType, iconColor, backgroundColor, borderColor, hasButton, buttonLabel, hasHeader, headerLabel, alertText, url, size, ...props }) => {
  // var style = "";
  // style = "backgroundColor=" + backgroundColor + " border=1px solid " + border;
  var alertIcon; 
  if (iconType === 'success') {
    alertIcon = CheckCircleSuccess
  } else if (iconType === 'failure') {
    alertIcon = ExclamationTriangleFailure
  } else if (iconType === 'message') {
    alertIcon = InfoCircleMessage
  } else {
    alertIcon = InfoCircleBrand
  }

  if (hasButton) {
    if (hasHeader) {
      if (size === 'large') {
        return (
          <div
            type="alert"
            className='storybook-alert-large-header-button'
            style={backgroundColor && { backgroundColor }}
            // style={{backgroundColor: {backgroundColor}, borderColor: {borderColor}, borderWidth: "1px"}}
            {...props}
          >
            <div className="header">
              <div className="headerContent"> 
                <img src={alertIcon} color={iconColor} className="icon" alt={iconType}/>
                {/* <FontAwesomeIcon icon={alertIcon} color={iconColor} className="icon"/>  */}
              <p>{headerLabel}</p>
              </div>

              <div className="x"> 
                <img src={Times} className="xIcon" alt='close'/> 
                {/* <FontAwesomeIcon icon={faTimes} className="xIcon"/>  */}
              </div>

            </div>
            <div className="alertBodyWithHeader">
              <p>{alertText}</p>
              <Button variant="tertiary" label="Button"/>
            </div>
          </div>
        );
      } else {
        return (
          <div
            type="alert"
            className='storybook-alert-header-button'
            style={backgroundColor && { backgroundColor }}
            {...props}
          >
            <div className="header">
              <div className="headerContent"> 
                <img src={alertIcon} color={iconColor} className="icon" alt={iconType}/>
                {/* <FontAwesomeIcon icon= {alertIcon} className="icon"/>  */}
              <p>{headerLabel}</p>
              </div>

              <div className="x"> 
                <img src={Times} className="xIcon" alt='close'/> 
                {/* <FontAwesomeIcon icon={faTimes} className="xIcon"/>  */}
              </div>

            </div>

            <div className="alertBodyWithHeader">
              <p>{alertText}</p>
              <Button variant="tertiary" label="Button"/>
            </div>
          </div>
        );
      }
    } else {
      if (size === 'large') {
        return (
          <div
            type="alert"
            className='storybook-alert-large-button'
            style={backgroundColor && { backgroundColor }}
            {...props}
          >
            <div className="alertBodyLarge">
              <img src={alertIcon} color={iconColor} className="icon" alt={iconType}/>
              {/* <FontAwesomeIcon icon= {alertIcon} className="icon"/>  */}

              <p>{alertText}</p>
              <Button variant="tertiary" label="Button"/>
              <div className="x"> 
                <img src={Times} className="xIcon" alt='close'/> 
                {/* <FontAwesomeIcon icon={faTimes} className="xIcon"/>  */}
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div
            type="alert"
            className='storybook-alert-button'
            style={backgroundColor && { backgroundColor }}
            {...props}
          >
            <div className="alertBody">
              <img src={alertIcon} color={iconColor} className="icon" alt={iconType}/>
              {/* <FontAwesomeIcon icon={alertIcon} className="icon"/>  */}

              <p>{alertText}</p>
              <Button variant="tertiary" label="Button"/>

              <div className="x"> 
                <img src={Times} className="xIcon" alt='close'/> 
                {/* <FontAwesomeIcon icon={faTimes} className="xIcon"/>  */}
              </div>
            </div>
          </div>
        );
      }
    }
  } else {
    if (hasHeader) {
      if (size === 'large') {
        return (
          <div
            type="alert"
            className='storybook-alert-large-header'
            style={backgroundColor && { backgroundColor }}
            {...props}
          >
            <div className="header">
              <div className="headerContent"> 
                <img src={alertIcon} color={iconColor} className="icon" alt={iconType}/>
                {/* <FontAwesomeIcon icon= {alertIcon} className="icon"/>  */}
              <p>{headerLabel}</p>
              </div>

              <div className="x"> 
                <img src={Times} className="xIcon" alt='close'/> 
                {/* <FontAwesomeIcon icon={faTimes} className="xIcon"/>  */}
              </div>
            </div>
            <div className="alertBodyWithHeader">
              <p>{alertText}</p>
            </div>
          </div>
        );
      } else {
        return (
          <div
            type="alert"
            className='storybook-alert-header'
            style={backgroundColor && { backgroundColor }}
            {...props}
          >
            <div className="header">
              <div className="headerContent"> 
                <img src={alertIcon} color={iconColor} className="icon" alt={iconType}/>
                {/* <FontAwesomeIcon icon= {alertIcon} className="icon"/>  */}
              <p>{headerLabel}</p>
              </div>

              <div className="x"> 
                <img src={Times} className="xIcon" alt='close'/> 
                {/* <FontAwesomeIcon icon={faTimes} className="xIcon"/>  */}
              </div>
            </div>
            <div className="alertBodyWithHeader">
              <p>{alertText}</p>
            </div>
          </div>
        );
      }
    } else {
      if (size === 'large') {
        return (
          <div
            type="alert"
            className='storybook-alert-large'
            style={backgroundColor && { backgroundColor }} 
            {...props}
          >
            <div className="alertBodyLarge">
              <img src={alertIcon} color={iconColor} className="icon" alt={iconType}/>
              {/* <FontAwesomeIcon icon={alertIcon} className="icon"/>  */}
              <p>{alertText}</p>
              <div className="x"> 
                <img src={Times} className="xIcon" alt='close'/> 
                {/* <FontAwesomeIcon icon={faTimes} className="xIcon"/>  */}
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div
            type="alert"
            className='storybook-alert'
            style={backgroundColor && { backgroundColor }}
            {...props}
          >

            <div className="alertBody">
              <img src={alertIcon} color={iconColor} className="icon" alt={iconType}/>
              {/* <FontAwesomeIcon icon={alertIcon} className="icon" color={iconColor}/>  */}

              <p>{alertText}</p>
              <div className="x"> 
                <img src={Times} className="xIcon" alt='close'/> 
                {/* <FontAwesomeIcon icon={faTimes} className="xIcon"/>  */}
              </div>
            </div>
          </div>
        );
      }
    }
  }
};
  
Alert.propTypes = {

  /**
   * What type of alert
   */
    iconType: PropTypes.string,

  /**
  * What type of alert
  */
  iconColor: PropTypes.string,

  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,

  /**
   * What background color to use
   */
  borderColor: PropTypes.string,

  /**
   * Boolean value for whether the alert has a button or not.
   */
  hasButton: PropTypes.bool,

  /**
   * Label of the button (if it has one)
   */
  buttonLabel: PropTypes.string,

  /**
   * Boolean value for whether the alert has a button or not.
   */
    hasHeader: PropTypes.bool,

    /**
    * Label of the button (if it has one)
    */
    headerLabel: PropTypes.string,

  /**
   * Alert message
   */
  alertText: PropTypes.string,

};

Alert.defaultProps = {
  iconType: 'success',
  iconColor: '#13B461',
  backgroundColor: '#E3FCEF',
  borderColor: '',
  size: 'regular',
  hasButton: false,
  hasHeader: false,
  buttonLabel: 'Button',
  alertText: 'This is a description of something that has happened + what you can do.', 
};

export default Alert;
