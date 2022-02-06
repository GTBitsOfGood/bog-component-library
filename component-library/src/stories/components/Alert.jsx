import React from 'react';
import PropTypes from 'prop-types';
import '../css/alert.css';
import {useState} from "react";
// import { Button } from './Button.jsx';
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
const Alert = ({type, iconColor, backgroundColor, borderColor, hasButton, buttonLabel, hasHeader, headerLabel, alertText, url, size, onClick, ...props }) => {
  // var style = "";
  // style = "backgroundColor=" + backgroundColor + " border=1px solid " + border;
  // const [isAlertOpen, setIsOpen] = useState(true);
  // const close = () => setIsOpen(false);
  // window.addEventListener('click', function(e){   
  //   if (document.getElementById('storybook-alertXButton').contains(e.target)){
  //     close();
  //   } 
  // });
  var alertIcon; 
  if (type === 'success') {
    alertIcon = CheckCircleSuccess
  } else if (type === 'failure') {
    alertIcon = ExclamationTriangleFailure
  } else if (type === 'message') {
    alertIcon = InfoCircleMessage
  } else {
    alertIcon = InfoCircleBrand
  }

  return(
    <div
      type="alert"
      className={['storybook-alert', `storybook-alert--${size}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      // style={{backgroundColor: {backgroundColor}, borderColor: {borderColor}, borderWidth: "1px"}}
      {...props}
    >
      <div 
        className='storybook-alertIconDiv'
      >
        <img src={alertIcon} color={iconColor} className="storybook-alertIcon" alt={type}/>
      </div>

      <div className='storybook-alertBody'>
        {hasHeader &&
          <div className='storybook-alertHeader'>
            <p>{headerLabel}</p>
          </div>
        }
        <div className='storybook-alertBodyText'>
          <p>{alertText}</p>
        </div>
        {hasButton &&
          <div className='storybook-alertButtonDiv'>
            {/* <p>Button</p> */}
            <button className='storybook-alertButton' onClick={onClick}>{buttonLabel}</button>
          </div>
        }
      </div>

      <div className="storybook-alertXDiv">
        <button className="storybook-alertXButton">
          <img 
            src={Times} 
            className="storybook-alertXIcon" 
            alt='close' 
            /> 
        </button>
      </div>

    </div>
  )
};
  
Alert.propTypes = {

  /**
   * What type of alert
   */
    type: PropTypes.string,

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

  /**
   * Button action
   */
  onClick: PropTypes.func,
};

Alert.defaultProps = {
  type: 'success',
  iconColor: '#13B461',
  backgroundColor: '#E3FCEF',
  borderColor: '',
  size: 'regular',
  hasButton: false,
  hasHeader: false,
  buttonLabel: 'Button',
  alertText: 'This is a description of something that has happened + what you can do.', 
  onClick: undefined,
};

export default Alert;
