import * as styledSystem from 'styled-system';
import systemPropTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';

const { compose, system } = styledSystem;


export const textDecoration = system({
    prop: 'textDecoration',
    cssProperty: 'text-decoration',
  });
  textDecoration.propTypes = PropTypes.string;
  
export const COMMON = compose(styledSystem.space, styledSystem.layout, styledSystem.color);
COMMON.propTypes = {
    ...systemPropTypes.space,
    ...systemPropTypes.layout,
    ...systemPropTypes.color,
};