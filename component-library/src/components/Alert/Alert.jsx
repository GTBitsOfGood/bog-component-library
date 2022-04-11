import React from "react";
import PropTypes from "prop-types";
import "./alert.css";
import Button from "../Button/Button.jsx";
import Times from "../../assets/icons/close.svg";
import InfoCircle from "../../assets/icons/message.svg";
import CheckCircle from "../../assets/icons/success.svg";
import ErrorTriangle from "../../assets/icons/error.svg";

/**
 * Props: backgroundColor: str, borderColor: str, alertText: str,
 * hasButton: bool + buttonText: str, hasHeader: bool + headerText: str, size: str, textColor: str
 */
const Alert = ({
  type,
  width,
  height,
  icon,
  alertText,
  buttonLabel,
  headerLabel,
  onClick,
  onCloseClick,
  backgroundColor,
  borderColor,
  headerColor,
  textColor,
  buttonColor,
  iconColor,
  hasIcon,
  hasButton,
  hasHeader,
  cornerRadius,
  ...props
}) => {
  var alertIcon = icon;
  if(alertIcon == null){
    if (type === "success") {
      alertIcon = CheckCircle;
    } else if (type === "failure") {
      alertIcon = ErrorTriangle;
    } else {
      alertIcon = InfoCircle;
    }
  }

  return (
    <div
      type="alert"
      className="storybook-alert"
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        width: width + "px",
        height: height + "px",
        borderRadius: cornerRadius + "px",
      }}
      {...props}
    >
      {hasIcon && (
        <div className="storybook-alertIconDiv">
          <img
            src={alertIcon}
            color={iconColor}
            className="storybook-alertIcon"
            alt={type}
            data-testid="alert-icon"
          />
        </div>
      )}

      <div className="storybook-alertBody">
        {hasHeader && (
          <div className="storybook-alertHeader" style={{color:headerColor}}>
            <p>{headerLabel}</p>
          </div>
        )}
        <div className="storybook-alertBodyText" style={{color:textColor}}>
          <p>{alertText}</p>
        </div>
        {hasButton && (
          <div className="storybook-alertButtonDiv">
            <Button
              onClick={onClick}
              label={buttonLabel}
              variant="tertiary"
              className="storybook-alertButton"
              style={{color:buttonColor}}
              data-testid="alert-button"
            />
          </div>
        )}
      </div>

      <div className="storybook-alertXDiv">
        <button className="storybook-alertXButton">
          <img src={Times} className="storybook-alertXIcon" data-testid="close-button" alt="close" onClick={onCloseClick}/>
        </button>
      </div>
    </div>
  );
};

Alert.propTypes = {
  /**
   * What type of alert
   */
  type: PropTypes.string,
  /**
   * Width of alert box
   */
  width: PropTypes.number,
  /**
   * Height of alert box
   */
  height: PropTypes.number,
  /**
   * Alert message
   */
  alertText: PropTypes.string,
  /**
   * Alert icon as svg
   */
  icon: PropTypes.element,
  /**
   * Button label
   */
  buttonLabel: PropTypes.string,
  /**
   * Header label
   */
  headerLabel: PropTypes.string,
  /**
   * Button action
   */
  onClick: PropTypes.func,
  /**
   * Close Button action
   */
  onCloseClick: PropTypes.func,
  /**
   * Background color
   */
  backgroundColor: PropTypes.string,
  /**
   * Border color
   */
  borderColor: PropTypes.string,
  /**
   * Header color
   */
  headerColor: PropTypes.string,
  /**
   * Message color
   */
  textColor: PropTypes.string,
  /**
   * Button text color
   */
  buttonColor: PropTypes.string,
  /**
   * Icon color
   */
  iconColor: PropTypes.string,
  /**
   * Boolean value for whether the alert has an icon or not.
   */
  hasIcon: PropTypes.bool,
  /**
   * Boolean value for whether the alert has a button or not.
   */
  hasButton: PropTypes.bool,
  /**
   * Boolean value for whether the alert has a header or not.
   */
  hasHeader: PropTypes.bool,
  /**
   * Corner Radius
   */
  cornerRadius: PropTypes.number,
};

Alert.defaultProps = {
  type: "success",
  width: 600,
  alertText:
    "This is a description of something that has happened + what you can do.",
  buttonLabel: "Button",
  backgroundColor: "#E3FCEF",
  borderColor: "transparent",
  headerColor: "",
  textColor: "",
  buttonColor: "",
  iconColor: "#13B461",
  hasIcon: true,
  hasButton: true,
  hasHeader: true,
  cornerRadius: 4,
};

export default Alert;
