import React, { cloneElement, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { COMMON } from '../../constants';
import Tab from './Tab.jsx';

const VerticalTabListBase = styled.ul`
    width: 332px;
    margin: 0;
    padding: 0;

    ${COMMON};
`

const VerticalTabList = ({
    children,
    theme: propTheme,
    ...props
}) => {
    const [currSelection, changeCurrSelection] = useState();

    const handleChange = (i) => {
        changeCurrSelection(i);
    }

    return (<VerticalTabListBase
    theme={theme}
    {...props}>
        {children.map((child, i) => cloneElement(child, {
            key: i,
            changeCurrSelection: () => handleChange(i),
            selected: currSelection === i ? true : false,
        }))}
    </VerticalTabListBase>)
}

VerticalTabList.Tab = Tab;

VerticalTabList.defaultProps = {
    theme,
 };

VerticalTabList.propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
    ...COMMON.propTypes,
  };
  
  export default VerticalTabList;