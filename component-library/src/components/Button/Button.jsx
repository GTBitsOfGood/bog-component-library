import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {variant as styledVariant} from 'styled-system';
import theme from '../../theme';
import { lodashGet } from '../../utils';
import { COMMON } from '../../constants';

const ButtonBase = styled.button`
  // Pointer
  cursor: pointer;

  // Text
  text-decoration: none;

  // border
  border-radius: 4px;
  box-shadow: none;

  // Size & Typography
  ${styledVariant({
    prop: 'type',
    scale: 'button.sizingAndTypography',
  })}

  // Display
  display: inline-block;

  // Align
  text-align: center;
  vertical-align: middle;

  // Color
  background: ${(props) => props.background.default};
  border: ${(props) => props.border.default};
  color: ${(props) => props.fontColor.default};

  // states
  &:hover:not([disabled]) {
    background: ${(props) => props.background.hover};
    border: ${(props) => props.border.hover};
    color: ${(props) => props.fontColor.hover};
    cursor: pointer;
  }

  &:disabled {
    background: ${(props) => props.background.disabled};
    border: ${(props) => props.border.disabled};
    color: ${(props) => props.fontColor.disabled};
  }

  ${COMMON};
`


const Button = ({ 
  className, onClick, variant, theme: propTheme, ...props 
}) => {
  
  const colorVariants = propTheme.colors.variants;
  const buttonColorPalette = colorVariants[variant];
  const buttonTheme = propTheme.button[variant];
  const buttonDefaultTheme = propTheme.button.default(buttonColorPalette);

  let background = {
    default: lodashGet(buttonTheme, 'bg.default', buttonDefaultTheme.bg.default),
    hover: lodashGet(buttonTheme, 'bg.hover', buttonDefaultTheme.bg.hover),
    focussed: lodashGet(buttonTheme, 'bg.focussed', buttonDefaultTheme.bg.focussed),
    disabled: lodashGet(buttonTheme, 'bg.disabled', buttonDefaultTheme.bg.disabled),
  };

  let border = {
    default: lodashGet(buttonTheme, 'border.default', buttonDefaultTheme.border.default),
    hover: lodashGet(buttonTheme, 'border.hover', buttonDefaultTheme.border.hover),
    focussed: lodashGet(buttonTheme, 'border.focussed', buttonDefaultTheme.border.focussed),
    disabled: lodashGet(buttonTheme, 'border.disabled', buttonDefaultTheme.border.disabled),
  };

  let fontColor = {
    default: lodashGet(buttonTheme, 'fontColor.default', buttonDefaultTheme.fontColor.default),
    hover: lodashGet(buttonTheme, 'fontColor.hover', buttonDefaultTheme.fontColor.hover),
    focussed: lodashGet(buttonTheme, 'fontColor.focussed', buttonDefaultTheme.fontColor.focussed),
    disabled: lodashGet(buttonTheme, 'fontColor.disabled', buttonDefaultTheme.fontColor.disabled),
  };

  const styling = {
    background,
    border,
    fontColor,
  }

  return (
    <ButtonBase
      {...styling}
      className={className}
      onClick={onClick}
      theme={theme}
      variant={variant}
      {...props}
    />
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.object,
  type: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.string,
  ...COMMON.propTypes,
};

Button.defaultProps = {
  variant: 'primary',
  type: 'medium',
  theme,
};

export default Button;