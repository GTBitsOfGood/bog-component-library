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
                    <TextDescription special={true} heading="Foundations" content="Not sure what you guys want here."/>
                </div>
            </div>

            
        </div>
    )
}