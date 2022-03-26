import NavBar from "../components/NavBar";
// import '../css/DesignerDeveloper.css';
// where tf is styling coming from???
import TextDescription from "../components/TextDescription";
import FigmaButton from "../components/FigmaButton";

export default function Foundations(props) {

    return (
        <div className="page-container">
            <NavBar className="navbar-container"/>

            <div className="page-content">
                <div className="text-container">
                    <TextDescription special={true} heading="Components" content="These components are the building blocks for our design system. Our designers work and Figma and so we tried to take full advantage of its features. Each component is flexible and can be adjusted to fit the specific branding of a non-profit partner."/>
                {/* embed storybook... */}
                </div>
                <FigmaButton/>
            </div>

            
        </div>
    )
}