import React from 'react'
import PropTypes from 'prop-types'
import '../css/navbar.css'
import {Button} from './Button'

export const Navbar = ({menuItems, logo, backgroundColor, addButton, buttonLabel, ...props}) => {
    const displayMenuItems = () => {
        return Object.values(menuItems).map((item, i) => {
            return (
                <li key={i}>
                    <a href={item.link}><p>{item.name}</p></a>
                </li>
            )
        })
    }

    return (
        <div className='navbar-container' style={backgroundColor && { backgroundColor }} {...props}>
            <a href="/"><img src={logo} alt='Company logo'></img></a>
            <ul>
                {menuItems == null ? null : displayMenuItems()}
            </ul>
            {addButton && <Button primary={true} label={buttonLabel}/>}
        </div>
    );
};

Navbar.propTypes = {
    /**
     * An object formatted as:
     * {
     *      0: {
     *          name: "Tab Name"
     *          link: "Tab link"
     *      },
     *      1: {...},
     *      ...
     * }
     */
    menuItems: PropTypes.object,
    /**
     * Link to the logo picture
     */
    logo: PropTypes.string,
    /**
     * Background color
     */
    backgroundColor: PropTypes.string,
    /**
     * Boolean for optional button
     */
    addButton: PropTypes.bool,
    /**
     * Label for optional button
     */
    buttonLabel: PropTypes.string,
}

Navbar.defaultProps = {
    menuItems: {
        0: {name: 'About Us', link: ''},
        1: {name: 'Projects', link: ''},
        2: {name: 'Blog', link: ''}
    },
    logo: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/orangutan_1f9a7.png',
    backgroundColor: '#0E1117',
    addButton: true,
    buttonLabel: 'Contact Us',
}