import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components';
import theme from '../../theme';
import { lodashGet, get } from '../../utils';
import { COMMON } from '../../constants';

const verticalStyle = css`
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const LabelBase = styled.label`
  ${get('typography.checkbox')}
  color: ${get('colors.text.dark.main')};

  position: relative;
  cursor: pointer;

  ${(props) => props.vertical && verticalStyle}

  & input:checked ~ span {
    ${get('checkbox.checked')}
    display: block;
  }

  & input:indeterminate ~ span {
    ${get('checkbox.indeterminate')}
    display: block;
  }

  & input:hover ~ span {
    ${get('checkbox.hover')}
    display: block;
  }

  & input:disabled ~ span {
    ${get('checkbox.disabled')}
    display: block;
  }

  & input:checked ~ span svg {
    display: inline-block;
  }

  ${COMMON};
`;

const InputBase = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const CheckboxBase = styled.span`
  position: absolute;
  top: ${(props) => (props.vertical ? '9px' : '0')};
  left: 0;
  height: 16px;
  width: 16px;
  border: ${get('checkbox.border')};
  border-radius: 4px;
  &::after {
    content: "";
    position: absolute;
    display: none;
  }
  & svg {
    position: absolute;
    top: 4px;
    left: 2.2px;
    height: 10px;
    display: none;
  }
  &[disabled] {
    ${get('checkbox.disabled')};
  }
`;

const Checkbox = ({
  checked,
  children,
  defaultChecked,
  disabled,
  id,
  indeterminate,
  name,
  onChange,
  theme: propTheme,
  value,
  vertical,
  ...props
}) => {
    const checkmarkColor = disabled ? lodashGet(theme, 'colors.disabled', '#FAFBFC') : lodashGet(theme, 'colors.white', '#FFFFFF')
  return (
    <LabelBase
      htmlFor={id}
      disabled={disabled}
      theme={propTheme}
      vertical={vertical}
      {...props}
    >
      {children}
      <InputBase
        checked={checked}
        defaultChecked={defaultChecked || indeterminate}
        disabled={disabled}
        id={id}
        indeterminate={indeterminate}
        name={name}
        onChange={onChange}
        type="checkbox"
        value={value}
      />
      <CheckboxBase disabled={disabled} theme={propTheme} vertical={vertical}>
        {indeterminate ? 
          <svg width="11" height="3" viewBox="0 0 10.5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M1.5 1.56165H9.5" 
              strokeWidth="1.5" 
              strokeLinecap="round"
              stroke={checkmarkColor}
            />
          </svg> : 
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M1 3.81165L4.5 7.31165L11 0.811646" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                stroke={checkmarkColor}
              />
          </svg>
        }
      </CheckboxBase>
    </LabelBase>
  )
};

Checkbox.defaultProps = { theme };

Checkbox.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  indeterminate: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  theme: PropTypes.object,
  value: PropTypes.any,
  vertical: PropTypes.bool,
  ...COMMON.propTypes,
};

export default Checkbox;
