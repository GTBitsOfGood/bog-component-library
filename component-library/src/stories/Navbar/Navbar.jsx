import React from 'react'
import PropTypes from 'prop-types'
import './navbar.css'
import Button from '../Button/Button'

export const Navbar = ({menuItems, logo, backgroundColor, addButton, buttonLabel, ...props}) => {

    const scrollFunction = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.getElementById("navbar").style.boxShadow = "0px 5px 20px grey";
            document.getElementById("burger-menu").style.boxShadow = "0px 5px 20px grey";
        } else {
            document.getElementById("navbar").style.boxShadow = "0px 0px 0px";
            document.getElementById("burger-menu").style.boxShadow = "0px 0px 0px";
        }
    }
    
    window.onscroll = () => {scrollFunction()};

    const displayMenuItems = (style) => {
        return Object.values(menuItems).map((item, i) => {
            return (
                <li key={i} className={style}>
                    <a  href={item.link}><p>{item.name}</p></a>
                </li>
            )
        })
    }

    const burgerMenuClick = () => {
        let element = document.getElementById("burger-menu");
        element.classList.remove("hidden");
        document.getElementById("burger-menu-btn-container").classList.add("hidden");
        element.classList.add("burger-menu-container");
    }
    
    const exitMenuClick = () => {
        let element = document.getElementById("burger-menu");
        element.classList.add("hidden");
        document.getElementById("burger-menu-btn-container").classList.remove("hidden");
        element.classList.remove("burger-menu-container");
    }

    return (
        <div>
            <div id="navbar" className='navbar-container' style={backgroundColor && { backgroundColor }} {...props}>
                <a href="/" id='logo' ><img src={logo} alt='Company logo'></img></a>
                <ul>
                    {menuItems == null ? null : displayMenuItems("navbar-tab")}
                </ul>
                {addButton && <Button primary={true} label={buttonLabel} size={window.innerWidth > 800 ? "large" : "small"}/>}
            </div>
            <div id="burger-menu-btn-container" className='navbar-container navbar-container--small' style={backgroundColor && { backgroundColor }} {...props}>
                <a href="/"><img src={logo} alt='Company logo'></img></a>
                <button className="menu-btn dropdown-btn" type="button" onClick={burgerMenuClick}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAMUlEQVRIie3SoREAIADDwJT9dy6KCUAAl1dVVQF9L2u07dHjJADj5KnuZEXaZ0V6wATQzQwKQvoBVgAAAABJRU5ErkJggg=="></img>
                </button>
            </div>
            <div id="burger-menu" className="hidden">
                <div className="exit-btn">
                    <button className="menu-btn" type="button" onClick={exitMenuClick}>
                        <img src="https://img.icons8.com/windows/32/000000/macos-close.png"/>
                    </button>
                </div>
                <div className="column-container">
                    <a href="/" className="burger-logo" ><img src={logo} alt='Company logo'></img></a>
                    <ul>
                        {menuItems == null ? null : displayMenuItems("burger-tab")}
                    </ul>
                </div>
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