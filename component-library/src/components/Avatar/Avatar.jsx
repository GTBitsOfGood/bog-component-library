import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import theme from '../../theme';
// import { lodashGet } from '../../utils';
// import { COMMON } from '../../constants';


const AvatarStyling = styled.avatar``

const Avatar = ({
    name, ...props
}) => {
    return (
        <AvatarStyling
            //   theme={theme}
            {...props}
        />
    );
};

Avatar.propTypes = {
    name: PropTypes.string
};

Avatar.defaultProps = {
    name: 'default'
};

export default Avatar;