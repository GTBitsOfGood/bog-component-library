import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {variant as styledVariant} from 'styled-system';
import theme from '../../theme';
import { lodashGet } from '../../utils';
import { COMMON } from '../../constants';

const AvatarBase = styled.avatar`
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
    scale: 'avatar.sizingAndTypography',
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

const Avatar = ({ 
  className, onClick, variant, theme: propTheme, ...props 
}) => {
  
  const colorVariants = propTheme.colors.variants;
  const avatarColorPalette = colorVariants[variant];
  const avatarTheme = propTheme.avatar[variant];
  const avatarDefaultTheme = propTheme.avatar.default(avatarColorPalette);

  let background = {
    default: lodashGet(avatarTheme, 'bg.default', avatarDefaultTheme.bg.default),
    hover: lodashGet(avatarTheme, 'bg.hover', avatarDefaultTheme.bg.hover),
    focussed: lodashGet(avatarTheme, 'bg.focussed', avatarDefaultTheme.bg.focussed),
    disabled: lodashGet(avatarTheme, 'bg.disabled', avatarDefaultTheme.bg.disabled),
  };

  let border = {
    default: lodashGet(avatarTheme, 'border.default', avatarDefaultTheme.border.default),
    hover: lodashGet(avatarTheme, 'border.hover', avatarDefaultTheme.border.hover),
    focussed: lodashGet(avatarTheme, 'border.focussed', avatarDefaultTheme.border.focussed),
    disabled: lodashGet(avatarTheme, 'border.disabled', avatarDefaultTheme.border.disabled),
  };

  let fontColor = {
    default: lodashGet(avatarTheme, 'fontColor.default', avatarDefaultTheme.fontColor.default),
    hover: lodashGet(avatarTheme, 'fontColor.hover', avatarDefaultTheme.fontColor.hover),
    focussed: lodashGet(avatarTheme, 'fontColor.focussed', avatarDefaultTheme.fontColor.focussed),
    disabled: lodashGet(avatarTheme, 'fontColor.disabled', avatarDefaultTheme.fontColor.disabled),
  };

  console.log(propTheme)

  const styling = {
    background,
    border,
    fontColor,
  }

  return (
    <AvatarBase
      {...styling}
      className={className}
      onClick={onClick}
      theme={theme}
      variant={variant}
      {...props}
    />
  );
};

Avatar.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.object,
  type: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.string,
  ...COMMON.propTypes,
};

Avatar.defaultProps = {
  variant: 'primary',
  type: 'medium',
  theme,
};

export default Avatar;