import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {variant as styledVariant} from 'styled-system';
import theme from '../../theme';
import { get, lodashGet } from '../../utils';
import { COMMON } from '../../constants';

const ScrollNavigationBase = styled.div`
  // Size & Typography
  font-family: ${get('typography.ScrollNavigation.fontFamily')};
  font-weight: ${get('typography.ScrollNavigation.fontWeight')};
  font-size: ${get('typography.ScrollNavigation.fontSize')};
  line-height: ${get('typography.ScrollNavigation.lineHeight')}; 
  display:flex;
  flex-direction:column;
  ${COMMON};
`
const Item = styled.div`
  //border
  padding: 8px 24px 8px 24px;
  border-style: solid;
  border-width:  ${(props) => props.border.default};
  border-color:  ${(props) => props.borderColor.default};
  //
  &:hover{
    border-color:  ${(props) => props.borderColor.hover};
  }

  &:active{
    border-color:  ${(props) => props.borderColor.active};
  }


  a {
   // Pointer
   cursor: pointer;
   text-decoration: none;
  }

  a:link{
    color: ${(props) => props.fontColor.default};
    text-decoration: none;
  }

  a:visited{
    color: ${(props) => props.fontColor.default};
    text-decoration: none;
  }

  a:hover{
    color: ${(props) => props.fontColor.hover};
    text-decoration: none;
  }

  a:active{
    color: ${(props) => props.fontColor.active};
    text-decoration: none;
    font-weight: ${get('fontWeights.semibold')};
  }
  ${COMMON};
`
const ScrollNavigation = ({ 
  side, sections, theme: propTheme, width, ...props 
}) => {
  
  const scrollColorPalette = propTheme.colors.variants['primary'];
  const scrollTheme = propTheme.ScrollNavigation[side];
  const scrollDefaultTheme = propTheme.ScrollNavigation.default(scrollColorPalette)[side];

  let border = {
    default: lodashGet(scrollTheme, 'borderWidth', scrollDefaultTheme[side]),
  };

  let borderColor = {
    default: lodashGet(scrollTheme, 'borderColor.default', scrollDefaultTheme.borderColor.default),
    hover: lodashGet(scrollTheme, 'borderColor.hover', scrollDefaultTheme.borderColor.hover),
    active: lodashGet(scrollTheme, 'borderColor.active', scrollDefaultTheme.borderColor.active),

  }

  let fontColor = {
    default: lodashGet(scrollTheme, 'fontColor.default', scrollDefaultTheme.fontColor.default),
    hover: lodashGet(scrollTheme, 'fontColor.hover', scrollDefaultTheme.fontColor.hover),
    active: lodashGet(scrollTheme, 'fontColor.active', scrollDefaultTheme.fontColor.active),
  };

  // console.log(propTheme)
  // console.log(scrollTheme)
  // console.log(scrollDefaultTheme)

  const styling = {
    border,
    borderColor,
    fontColor,
  }
const listItems = () => {
  return sections.map((item, i) => {
    return (
      <Item
        type="link"
        key={i}
        {...styling}
        theme={theme}
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
    <ScrollNavigationBase
      {...styling}
      theme={theme}
      {...props}
      style = {{width: width}}
    >
      {listItems()}
    </ScrollNavigationBase>
  );
};

ScrollNavigation.propTypes = {
    /**
     * what side is the tracking bar on?
     */
    side: PropTypes.string,
    /**
     * Works by the IDs for the sections
     * Each section must be formated in the following manner:
     * {title: <title of section>, id: <id of section>}
     */
    sections: PropTypes.array,
    theme: PropTypes.object,
    width: PropTypes.number,
    ...COMMON.propTypes,
};
  
  ScrollNavigation.defaultProps = {
    side:'left',
    sections: [
      {title:"How to use figma array 1", id:"array1"}, 
      {title:"How to use figma array 2", id:"array2"},
      {title:"How to use figma array 3", id:"array3"}],
    theme,
    width: 240,
  };
  
  export default ScrollNavigation;