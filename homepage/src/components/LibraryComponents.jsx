import LibraryDrawer from './LibraryDrawer.jsx';
import Card from './Card.jsx';
import TextDescription from './TextDescription.jsx';
import FigmaButton from './FigmaButton';
import '../css/LibraryComponents.css';



function LibraryComponents(props) {

  const components = [
    { id: 0, img: props.imageURLS[10].url, heading: 'dropdown', content: 'A dropdown presents an expandable list of options for a user to select. This helps simplify forms or pages.'},
    { id: 1, img: props.imageURLS[12].url, heading: 'tooltip', content: 'A hovering text element that quickly displays information over components regarding their function or meaning.'},
    { id: 2, img: props.imageURLS[2].url, heading: 'input Field', content: 'Allows users to input text information into a form or page. Provides feedback regarding the status of the input.'},
    { id: 3, img: props.imageURLS[6].url, heading: 'button', content: 'A clickable element that allows a user to interact with a UI. Size and style can be customized.'},
    { id: 4, img: props.imageURLS[13].url, heading: 'checkbox', content: 'Necessary for selecting multiple options for a single question or query. The default checkmark is a replaceable icon.'},
    { id: 5, img: props.imageURLS[9].url, heading: 'radio', content: 'Used in mutually exclusive choice scenarios. Only one option may be selected at any time.'},
    { id: 6, img: props.imageURLS[11].url, heading: 'alert', content: 'An alert is a  persistent notification to inform the user of some function. The alert disappears only after the user interacts with it.'},
    { id: 7, img: props.imageURLS[1].url, heading: 'toast', content: 'Toast is similar to an alert but has different behavior. The notification disappears after some amount of time without user interaction.'},
    { id: 8, img: props.imageURLS[3].url, heading: 'switch', content: 'An element that allows the user to toggle between two options or states. Can be customized with icons or labels.'},
  ]
  
  return (
    <div className="library-container">
        <div className="navbar-container">
            <img className="components-logo" src={props.imageURLS[7].url} alt="homepage_main_image" onClick={() => props.handle(true)}/>
        </div>
        <div className="library-content-container">
            <LibraryDrawer/>
            <div className="components-container">
              <TextDescription special={true} heading="Components" content="These components are the building blocks for our design system. Our designers work and Figma and so we tried to take full advantage of its features. Each component is flexible and can be adjusted to fit the specific branding of a non-profit partner."/>
              <FigmaButton logo={props.imageURLS[4].url}/>
              <div className="component-cards">
                {components.map(component => <Card key={component.id} img={component.img} heading={component.heading} content={component.content}/>)}
              </div>
            </div>
        </div>
        <img src={props.imageURLS[8].url} alt="capy" className="capy"/>
    </div>
  );
}

export default LibraryComponents;
