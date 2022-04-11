import React from "react";
import PropTypes from "prop-types";
// import "./alert.css";
import Button from "../Button/Button.jsx";
import Times from "../../assets/icons/close.svg";
import InfoCircle from "../../assets/icons/message.svg";
import CheckCircle from "../../assets/icons/success.svg";
import ErrorTriangle from "../../assets/icons/error.svg";
import styled from 'styled-components';
import {variant as styledVariant} from 'styled-system';
import theme from '../../theme';
import { get, lodashGet } from '../../utils';
import { COMMON } from '../../constants';

const AlertBase = styled.div` 
  display: flex;
  flex-direction: row;
  padding: 10px;
${COMMON};
`
const AlertIconDiv = styled.div` 
  display: flex;
  justify-content: flex-start;
  margin-right: 10px;

  .storybook-alertIcon {
    height: 16px;
    width: 16px;
  }
${COMMON};
`
const AlertBodyDiv = styled.div` 
  display: flex;
  flex-direction: column;
  width: inherit;
${COMMON};
`
const AlertHeaderDiv = styled.div`  
  p {
    // Size & Typography
    font-family: ${get('typography.alert.header.fontFamily')};
    font-weight: ${get('typography.alert.header.fontWeight')};
    font-size: ${get('typography.alert.header.fontSize')};
    line-height: ${get('typography.alert.header.lineHeight')}; 
    margin: 0px 0px 4px 0px;
    letter-spacing: 1.5px;
  }
${COMMON};
`
const AlertBodyTextDiv = styled.div` 
  p {
    // Size & Typography
    font-family: ${get('typography.alert.text.fontFamily')};
    font-weight: ${get('typography.alert.text.fontWeight')};
    font-size: ${get('typography.alert.text.fontSize')};
    line-height: ${get('typography.alert.text.lineHeight')}; 
    margin: 0px;
  }
${COMMON};
`
const AlertButtonDiv = styled.div`  
  align-self: flex-end;
  padding: 0px;
  margin: 4px 0px 0px 0px;

  button {
    // Size & Typography
    font-family: ${get('typography.alert.buttonText.fontFamily')};
    font-weight: ${get('typography.alert.buttonText.fontWeight')};
    font-size: ${get('typography.alert.buttonText.fontSize')};
    line-height: ${get('typography.alert.buttonText.lineHeight')};
    border: 0px;
    padding: 0px;
    background-color: transparent;
    outline: none;
  }

  &:hover {
    opacity: 0.5;
  }
${COMMON};
`
const AlertXDiv = styled.div`  
  display: flex;
  justify-self: flex-end;
  margin-left: auto;

  &:hover {
    opacity: 0.5;
  }

  button {
    background-color: transparent;
    outline: none;
    margin-left: 10px;
    border: 0px;
    padding: 0px;
    align-self: flex-start;
    height: 12px;
    width: 12px;
    
  }
  img {
    height: 12px;
    width: 12px;
  }
${COMMON};
`

/**
 * Props: backgroundColor: str, borderColor: str, alertText: str,
 * hasButton: bool + buttonText: str, hasHeader: bool + headerText: str, size: str, textColor: str
 */
const Alert = ({
  type,
  invertedColors,
  width,
  height,
  icon,
  alertText,
  buttonLabel,
  headerLabel,
  onClick,
  onCloseClick,
  hasIcon,
  hasButton,
  hasHeader,
  cornerRadius,
  theme: propTheme,
  ...props
}) => {
  var alertIcon = icon;
  let varient = type;
  if(alertIcon == null){
    if (type === "success") {
      alertIcon = CheckCircle;
    } else if (type === "error") {
      alertIcon = ErrorTriangle;
    } else {
      alertIcon = InfoCircle;
      if(type === "message"){
        varient = 'tertiary';
      } else {
        varient = 'primary';
      }
    }
  }

  // console.log(propTheme);
  const colorVariants = propTheme.colors.variants;
  const alertColorPalette = colorVariants[varient];
  const alertTheme = propTheme.alert[type][invertedColors];
  const alertDefaultTheme = propTheme.alert.default(alertColorPalette);


  return (
    <AlertBase
      type="alert"
      className="storybook-alert"
      style={{
        backgroundColor: lodashGet(alertTheme, 'bg.default', alertDefaultTheme.bg.default),
        border: lodashGet(alertTheme, 'border.default', alertDefaultTheme.border.default),
        width: width + "px",
        height: height + "px",
        borderRadius: cornerRadius + "px",
      }}
      {...props}
    >
      {hasIcon && (
        <AlertIconDiv className="storybook-alertIconDiv">
          <img
            src={alertIcon}
            color={lodashGet(alertTheme, 'iconColor.default', alertDefaultTheme.iconColor.default)}
            className="storybook-alertIcon"
            alt={type}
            data-testid="alert-icon"
          />
        </AlertIconDiv>
      )}

      <AlertBodyDiv className="storybook-alertBody">
        {hasHeader && (
          <AlertHeaderDiv 
          className="storybook-alertHeader" 
          style={{color:lodashGet(alertTheme, 'headerColor.default', alertDefaultTheme.headerColor.default)}}>
            <p>{headerLabel}</p>
          </AlertHeaderDiv>
        )}
        <AlertBodyTextDiv 
        className="storybook-alertBodyText" 
        style={{color:lodashGet(alertTheme, 'textColor.default', alertDefaultTheme.textColor.default)}}>
          <p>{alertText}</p>
        </AlertBodyTextDiv>
        {hasButton && (
          <AlertButtonDiv className="storybook-alertButtonDiv">
            <button
              onClick={onClick}
              // label={buttonLabel}
              // variant="tertiary"
              className="storybook-alertButton"
              style={{color:lodashGet(alertTheme, 'buttonColor.default', alertDefaultTheme.buttonColor.default)}}
              testId={"alert-button"}
            >{buttonLabel}</button>
          </AlertButtonDiv>
        )}
      </AlertBodyDiv>

      <AlertXDiv className="storybook-alertXDiv">
        <button className="storybook-alertXButton">
          <img 
          src={Times} 
          color={lodashGet(alertTheme, 'iconColor.default', alertDefaultTheme.iconColor.default)}
          className="storybook-alertXIcon" 
          data-testid="close-button" 
          alt="close" 
          onClick={onCloseClick}/>
        </button>
      </AlertXDiv>
    </AlertBase>
  );
};

Alert.propTypes = {
  /**
   * What type of alert
   */
  type: PropTypes.string,
  /**
   * Are colors inverted?
   */
  invertedColors: PropTypes.bool,
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
  /**
   * Theme
   */
  theme: PropTypes.object,
  ...COMMON.propTypes,
};

Alert.defaultProps = {
  type: "success",
  invertedColors: false,
  width: 600,
  alertText:
    "This is a description of something that has happened + what you can do.",
  buttonLabel: "Button",
  hasIcon: true,
  hasButton: true,
  hasHeader: true,
  cornerRadius: 4,
  theme,
};

export default Alert;
