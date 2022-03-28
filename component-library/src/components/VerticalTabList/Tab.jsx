import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { get } from '../../utils';
import { COMMON } from '../../constants';

const TabBase = styled.li`
    width: inherit;
    position: relative;
    display: flex;
    align-items: center;
    height: 48px;
    list-style-type: none;
    background-color: ${(props)=>props.tab};
    color: ${(props)=>props.font};

    :hover {
        background-color: ${(props) => props.hover.tab};
        color: ${(props) => props.hover.font};
    }

    & div:hover {
        background-color: ${(props) => props.hover.line};
    }

    ${COMMON};
`

const Text = styled.p`
    margin-left: 48px;
    line-height: 20px;
    font-family: ${get('fonts.main')};
    font-weight: ${get('fontWeights.extrabold')};
    font-size: 16px;
    width: auto;

    ${COMMON};
`

const Rectangle = styled.div`
    position: absolute;
    width: 2px;
    height: 100%;
    right: 0;

    background-color: ${(props)=>props.line};

    &:hover {
        background-color: ${(props) => props.hover.line};
    }

    ${COMMON};
`

const Tab = ({
    children,
    theme: propTheme,
    variant,
    onclick,
    changeCurrSelection,
    selected,
    key,
    ...props
}) => {

    const tabTheme = propTheme.verticalTabList;
    const lineColor = tabTheme.lineColor;
    const tabColor = tabTheme.tabColor;
    const fontColor = tabTheme.fontColor;

    let styling = {
        line: lineColor.default,
        tab: tabColor.default,
        font: fontColor.default,
        hover: {
            line: lineColor.hover,
            tab: tabColor.hover,
            font: fontColor.hover,
        }
    }

    if (selected) {
        styling.line = tabColor.selected;
        styling.tab = "#EAE6FF";
        styling.font = fontColor.selected;
    }

    if (variant === "lineTabs") {
        styling.tab = "transparent"
        styling.hover.tab = "transparent"
    }
    
    return(
        <TabBase
            {...styling}
            theme={theme}
            onClick={() => changeCurrSelection(key)}
            {...props}
        >
            <Text>
                {children}
            </Text>
            <Rectangle {...styling}> </Rectangle>
        </TabBase>
    )
}

Tab.propTypes = {
    theme: PropTypes.object,
    variant: PropTypes.string,
    selected: PropTypes.bool,
    ...COMMON.propTypes,
};

Tab.defaultProps = {
    theme,
    selected: false,
  };

Tab.displayName = 'VerticalTabList.Tab';

export default Tab;