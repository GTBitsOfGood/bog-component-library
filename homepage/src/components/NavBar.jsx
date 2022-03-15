import "../css/NavBar.css";
import useImage from "../imageRendering/ImageContext";
import {Link} from "react-router-dom";

export default function NavBar(props) {
    const {imageURLS} = useImage();

    return (
        <div className="nav-bar">
            <div className="nav-image">
                <img src={imageURLS["MAIN_LOGO"]} alt="homepage_main_image"/>
            </div>
    
            <div className="link-container">
                <Link to="/library-components">Components</Link>
                <Link to="/foundations">Foundations</Link>
                <Link to="/design-patterns">Design Paterns</Link>
                <Link to="/support">Support</Link>
            </div>
        </div>
    )
}