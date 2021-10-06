import React from 'react'
import PropTypes from 'prop-types'
import '../css/navbar.css'
import {Button} from './Button'

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
            The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

1914 translation by H. Rackham
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."


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