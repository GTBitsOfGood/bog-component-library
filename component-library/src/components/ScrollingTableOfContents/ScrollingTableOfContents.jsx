import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {variant as styledVariant} from 'styled-system';
import theme from '../../theme';
import { get, lodashGet } from '../../utils';
import { COMMON } from '../../constants';

const ScrollingTableOfContentsItemBasem = styled.div`
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
const ScrollingTableOfContentsBase = styled.div`
  // Size & Typography
  font-family: ${get('fonts.secondary')};
  font-weight: ${get('fontWeights.regular')};
  font-size: ${get('typography.scrollingTableOfContents.fontSize')};
  line-height: ${get('typography.scrollingTableOfContents.lineHeight')}; 

  display:flex;
  flex-direction:column;
`
const Item = styled.div`
  //border
  padding: 8px 24px 8px 24px;
  border-left: 2px solid #D9D9D9;
  //
  &:hover{
   border-left: 2px solid #36306E;
  }

  a {
   // Pointer
   cursor: pointer;
   text-decoration: none;
  }

  a:link{
    color: #3F3F3F;
    text-decoration: none;
  }

  a:visited{
    color: #3F3F3F;
    text-decoration: none;
  }

  a:hover{
    color: #473F91;
    text-decoration: none;
  }

  a:active{
    color: #473F91;
    text-decoration: none;
    font-weight: ${get('fontWeights.semibold')};
  }
`
const ScrollingTableOfContents = ({ 
  className, sections, theme: propTheme, ...props 
}) => {
  
//   const colorVariants = propTheme.colors.variants;
//   const buttonColorPalette = colorVariants[variant];
//   const buttonTheme = propTheme.button[variant];
//   const buttonDefaultTheme = propTheme.button.default(buttonColorPalette);

//   let background = {
//     default: lodashGet(buttonTheme, 'bg.default', buttonDefaultTheme.bg.default),
//     hover: lodashGet(buttonTheme, 'bg.hover', buttonDefaultTheme.bg.hover),
//     focussed: lodashGet(buttonTheme, 'bg.focussed', buttonDefaultTheme.bg.focussed),
//     disabled: lodashGet(buttonTheme, 'bg.disabled', buttonDefaultTheme.bg.disabled),
//   };

//   let border = {
//     default: lodashGet(buttonTheme, 'border.default', buttonDefaultTheme.border.default),
//     hover: lodashGet(buttonTheme, 'border.hover', buttonDefaultTheme.border.hover),
//     focussed: lodashGet(buttonTheme, 'border.focussed', buttonDefaultTheme.border.focussed),
//     disabled: lodashGet(buttonTheme, 'border.disabled', buttonDefaultTheme.border.disabled),
//   };

//   let fontColor = {
//     default: lodashGet(buttonTheme, 'fontColor.default', buttonDefaultTheme.fontColor.default),
//     hover: lodashGet(buttonTheme, 'fontColor.hover', buttonDefaultTheme.fontColor.hover),
//     focussed: lodashGet(buttonTheme, 'fontColor.focussed', buttonDefaultTheme.fontColor.focussed),
//     disabled: lodashGet(buttonTheme, 'fontColor.disabled', buttonDefaultTheme.fontColor.disabled),
//   };

//   console.log(propTheme)

//   const styling = {
//     background,
//     border,
//     fontColor,
//   }
const listItems = () => {
  return sections.map((item, i) => {
    return (
      <Item
        type="link"
        key={i}
      >
        <a
          href={"#" + item.id}
          alt={item.title + " Link"}>
          {item.title}
        </a>
      </Item>
    );
  });
};


  return (
    // <ScrollingTableOfContentsBase
    //   {...styling}
    //   className={className}
    //   theme={theme}
    //   {...props}
    // />
    <ScrollingTableOfContentsBase>
      Navigation Example
      {listItems()}
    </ScrollingTableOfContentsBase>
  );
};

ScrollingTableOfContents.propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    sections: PropTypes.array,
    ...COMMON.propTypes,
};
  
  ScrollingTableOfContents.defaultProps = {
    sections: [
      {title:"How to use figma array 1", id:"array1"}, 
      {title:"How to use figma array 1", id:"array1"}],
  };
  
  export default ScrollingTableOfContents;