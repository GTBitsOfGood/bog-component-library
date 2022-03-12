import LibraryDrawer from '../components/LibraryDrawer.jsx';
import Card from '../components/Card.jsx';
import TextDescription from '../components/TextDescription.jsx';
import FigmaButton from '../components/FigmaButton';
import '../css/LibraryComponents.css';
import useImage from '../imageRendering/ImageContext';



function LibraryComponents(props) {
  const {imageURLS} = useImage();

  const components = [
    { id: 0, img: imageURLS["DROPDOWN"], heading: 'dropdown', content: 'A dropdown presents an expandable list of options for a user to select. This helps simplify forms or pages.'},
    { id: 1, img: imageURLS["TOOLTIP"], heading: 'tooltip', content: 'A hovering text element that quickly displays information over components regarding their function or meaning.'},
    { id: 2, img: imageURLS["INPUT_FIELD"], heading: 'input Field', content: 'Allows users to input text information into a form or page. Provides feedback regarding the status of the input.'},
    { id: 3, img: imageURLS["BUTTON"], heading: 'button', content: 'A clickable element that allows a user to interact with a UI. Size and style can be customized.'},
    { id: 4, img: imageURLS["CHECKBOX"], heading: 'checkbox', content: 'Necessary for selecting multiple options for a single question or query. The default checkmark is a replaceable icon.'},
    { id: 5, img: imageURLS["RADIO"], heading: 'radio', content: 'Used in mutually exclusive choice scenarios. Only one option may be selected at any time.'},
    { id: 6, img: imageURLS["ALERT"], heading: 'alert', content: 'An alert is a  persistent notification to inform the user of some function. The alert disappears only after the user interacts with it.'},
    { id: 7, img: imageURLS["TOAST"], heading: 'toast', content: 'Toast is similar to an alert but has different behavior. The notification disappears after some amount of time without user interaction.'},
    { id: 8, img: imageURLS["SWITCH"], heading: 'switch', content: 'An element that allows the user to toggle between two options or states. Can be customized with icons or labels.'},
  ]
  
  return (
    <div className="library-container">
        <div className="navbar-container">
            <img className="components-logo" src={imageURLS["MAIN_LOGO"]} alt="homepage_main_image" onClick={() => props.handle(true)}/>
        </div>
        <div className="library-content-container">
            <LibraryDrawer/>
            <div className="components-container">
              <TextDescription special={true} heading="Components" content="These components are the building blocks for our design system. Our designers work and Figma and so we tried to take full advantage of its features. Each component is flexible and can be adjusted to fit the specific branding of a non-profit partner."/>
              <FigmaButton logo={imageURLS["FIGMA_LOGO"]}/>
              <div className="component-cards">
                {components.map(component => <Card key={component.id} img={component.img} heading={component.heading} content={component.content}/>)}
              </div>
            </div>
        </div>
        <img src={imageURLS["WEBSITE_CAPY"]} alt="capy" className="capy"/>
    </div>
  );
}

export default LibraryComponents;
