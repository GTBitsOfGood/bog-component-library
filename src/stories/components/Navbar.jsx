import React from 'react'
import PropTypes from 'prop-types';
import '../css/navbar.css'
import {Button} from './Button'

export const Navbar = ({menuItems, logo, backgroundColor, addButton, buttonLabel, ...props}) => {
    return (
        <div class='navbar-container' style={backgroundColor && { backgroundColor }} {...props}>
            <img src={logo} alt='Company logo'></img>
            <ul>
                {menuItems.map((item) => {
                    return (
                        <li>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    )
                })}
            </ul>
            {addButton && <Button primary='true' label={buttonLabel}/>}
        </div>
    );
};

Navbar.propTypes = {
    /**
     * MenuItems: array of objects formatted as:
     * {
     *    name: 'name of the menu item',
     *    link: 'link of the menu item'
     * }
     */
    menuItems: PropTypes.array,
    /**
     * Logo: link to the logo picture
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
    menuItems: [{name: 'About Us', link: ''}, {name: 'Projects', link: ''}, {name: 'Blog', link: ''}],
    logo: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/orangutan_1f9a7.png',
    backgroundColor: '#0E1117',
    addButton: true,
    buttonLabel: 'Contact Us',
}