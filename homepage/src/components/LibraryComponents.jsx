import Card from './Card';
import TextDescription from './TextDescription';
import FigmaButton from './FigmaButton';
import logo from '../assets/main_logo.png';
import capy from '../assets/website_capy.png';
import dropdown from '../assets/dropdown.png'
import tooltip from '../assets/tooltip.png';
import inputField from '../assets/input_field.png';
import button_img from '../assets/button_img.png';
import checkbox from '../assets/checkbox.png';
import radio from '../assets/radio.png';
import alert from '../assets/alert.png';
import toast from '../assets/toast.png';
import switch_img from '../assets/switch_img.png';
import '../css/LibraryComponents.css';

const components = [
  { id: 0, img: dropdown, heading: 'dropdown', content: 'A dropdown presents an expandable list of options for a user to select. This helps simplify forms or pages.'},
  { id: 1, img: tooltip, heading: 'tooltip', content: 'A hovering text element that quickly displays information over components regarding their function or meaning.'},
  { id: 2, img: inputField, heading: 'input Field', content: 'Allows users to input text information into a form or page. Provides feedback regarding the status of the input.'},
  { id: 3, img: button_img, heading: 'button', content: 'A clickable element that allows a user to interact with a UI. Size and style can be customized.'},
  { id: 4, img: checkbox, heading: 'checkbox', content: 'Necessary for selecting multiple options for a single question or query. The default checkmark is a replaceable icon.'},
  { id: 5, img: radio, heading: 'radio', content: 'Used in mutually exclusive choice scenarios. Only one option may be selected at any time.'},
  { id: 6, img: alert, heading: 'alert', content: 'An alert is a  persistent notification to inform the user of some function. The alert disappears only after the user interacts with it.'},
  { id: 7, img: toast, heading: 'toast', content: 'Toast is similar to an alert but has different behavior. The notification disappears after some amount of time without user interaction.'},
  { id: 8, img: switch_img, heading: 'switch', content: 'An element that allows the user to toggle between two options or states. Can be customized with icons or labels.'},
]

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
              <div className="component-cards">
                {components.map(component => <Card key={component.id} img={component.img} heading={component.heading} content={component.content}/>)}
              </div>
            </div>
        </div>
        <img src={capy} alt="capy" className="capy"/>
    </div>
  );
}

export default LibraryComponents;
