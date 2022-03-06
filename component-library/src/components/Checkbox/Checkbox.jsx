import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components';
import { variant as styledVariant } from 'styled-system';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { COMMON } from '../../utils/constants';

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
    ${styledVariant({
      prop: 'error',
      scale: 'checkbox.checked',
    })};
    border-radius: 3px;
    display: block;s
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

const StyledSVG = styled.svg`
  &[disabled] {
    stroke: ${get('colors.lightGrey')};
  }
`

const Checkbox = ({
  checked,
  children,
  defaultChecked,
  disabled,
  id,
  intermediate,
  name,
  onChange,
  theme: propTheme,
  value,
  vertical,
  ...props
}) => (
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
      defaultChecked={defaultChecked}
      disabled={disabled}
      id={id}
      name={name}
      onChange={onChange}
      type="checkbox"
      value={value}
    />
    <CheckboxBase disabled={disabled} theme={propTheme} vertical={vertical}>
      {intermediate ? 
        <svg width="11" height="3" viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M1.5 1.56165H9.5" 
            stroke="white"
            stroke-width="1.5" 
            stroke-linecap="round"
          />
        </svg> : 
       <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path 
            d="M1 3.81165L4.5 7.31165L11 0.811646" 
            stroke="white" 
            stroke-width="1.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          />
       </svg>
      }
    </CheckboxBase>
  </LabelBase>
);

Checkbox.defaultProps = { theme };

Checkbox.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  theme: PropTypes.object,
  value: PropTypes.any,
  vertical: PropTypes.bool,
  ...COMMON.propTypes,
};

export default Checkbox;
