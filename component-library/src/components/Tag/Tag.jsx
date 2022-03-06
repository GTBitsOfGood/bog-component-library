import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant as styledVariant } from 'styled-system';
import theme from '../../theme';
import { get, lodashGet } from '../../utils';
import { COMMON } from '../../constants';


const TagBase = styled.div`
    border-radius: 4px;

    display: inline-flex;
    vertical-align: middle;
    align-items: center;

    overflow-wrap: break-word;
    max-width: 20%;

    font-family: ${get('fonts.secondary')};
    font-weight: ${get('fontWeights.regular')};
    font-size: ${(props) => props.fontStyle.fontSize};
    line-height: ${(props) => props.fontStyle.lineHeight}; 

    padding: 2px 8px 4px 8px;

    background-color: ${(props) => props.background};
    color: ${get('colors.darkPalette[700]')};
${COMMON};
`

const Tag = ({variant, type, theme: propTheme , ...props}) => {
    const backgroundColor = propTheme.tag.variants[variant].background;
    const fontStyle = propTheme.tag.sizingAndTypography[type];

    return(
        <TagBase
            background={backgroundColor}
            theme={propTheme}
            fontStyle={fontStyle}
            {...props}
        />
    )
}

Tag.propTypes = {
    theme: PropTypes.object,
    type: PropTypes.oneOf(['small', 'medium', 'large']),
    variant: PropTypes.oneOf(['info', 'danger', 'success', 'warning', 'archived']),
    children: PropTypes.node,
    ...COMMON.propTypes,
};

Tag.defaultProps = {
    variant: 'info',
    type: 'medium',
    theme,
};

export default Tag;