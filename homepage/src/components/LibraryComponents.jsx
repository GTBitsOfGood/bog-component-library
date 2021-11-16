import TextDescription from './TextDescription';
import FigmaButton from './FigmaButton';
import logo from '../assets/main_logo.png';
import capy from '../assets/website_capy.png';
import '../css/LibraryComponents.css';

function LibraryComponents() {
  return (
    <div className="library-container">
        <div className="navbar-container">
            <img className="components-logo" src={logo} alt="homepage_main_image"/>
        </div>
        <div className="library-content-container">
            <div className="components-menubar">
                <span className="menubar-heading">Foundation</span>
                <span className="menubar-content">Color</span>
                <span className="menubar-content">Typography</span>

                <span className="menubar-heading">Components</span>
            </div>
            <div className="components-container">
              <TextDescription special={true} heading="Components" content="These components are the building blocks for our design system. Our designers work and Figma and so we tried to take full advantage of its features. Each component is flexible and can be adjusted to fit the specific branding of a non-profit partner."/>
              <FigmaButton/>
            </div>
        </div>
        <img src={capy} alt="capy" className="capy"/>
    </div>
  );
}

export default LibraryComponents;
