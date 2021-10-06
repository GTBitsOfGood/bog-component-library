import React from 'react'
import PropTypes from 'prop-types'
import '../css/navbar.css'
import {Button} from './Button'

export const Navbar = ({menuItems, logo, backgroundColor, addButton, buttonLabel, ...props}) => {

    const scrollFunction = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.getElementById("navbar").style.boxShadow = "0px 5px 20px grey";
        } else {
            document.getElementById("navbar").style.boxShadow = "0px 0px 0px";
        }
    }
    
    window.onscroll = () => {scrollFunction()};

    const displayMenuItems = (style) => {
        return Object.values(menuItems).map((item, i) => {
            return (
                <li key={i}>
                    <a className={style} href={item.link}><p>{item.name}</p></a>
                </li>
            )
        })
    }

    const burgerMenuClick = () => {
        document.getElementById("burger-menu").classList.toggle("hidden");
    }

    return (
        <div>
            <div id="navbar"className='navbar-container' style={backgroundColor && { backgroundColor }} {...props}>
                <a href="/" id='logo' ><img src={logo} alt='Company logo'></img></a>
                <ul>
                    {menuItems == null ? null : displayMenuItems("navbar-tab")}
                </ul>
                {addButton && <Button primary={true} label={buttonLabel} size={window.innerWidth > 800 ? "large" : "small"}/>}
            </div>
            <div id="burger-menu-btn-container">
                <button className="burger-menu-btn" type="button" onClick={burgerMenuClick}>
                    <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDIgNSBMIDIgNyBMIDIyIDcgTCAyMiA1IEwgMiA1IHogTSAyIDExIEwgMiAxMyBMIDIyIDEzIEwgMjIgMTEgTCAyIDExIHogTSAyIDE3IEwgMiAxOSBMIDIyIDE5IEwgMjIgMTcgTCAyIDE3IHoiPjwvcGF0aD48L3N2Zz4="/>
                </button>
            </div>
            <div id="burger-menu" className="hidden">
                <a href="/" id="logo"><img src={logo} alt='Company logo'></img></a>
                <ul>
                    {menuItems == null ? null : displayMenuItems("burger-tab")}
                </ul>
            </div>
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