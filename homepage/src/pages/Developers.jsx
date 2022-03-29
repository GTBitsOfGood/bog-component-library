// import NavBar from "../components/NavBar";
import "../css/DesignerDeveloper.css";
import TextDescription from "../components/TextDescription";
import StorybookButton from "../components/StorybookButton";

export default function Designers(props) {

    return (
        <div className="page-container">
            {/* <NavBar className="nav-bar-container"/> */}

            <div className="page-content">
                <div className="text-container">
                    <TextDescription special={true} heading="For Developers" content="These components are the building blocks for our design system. Our designers work and Figma and so we tried to take full advantage of its features. Each component is flexible and can be adjusted to fit the specific branding of a non-profit partner."/>
                    <TextDescription special={false} heading="How to use Storybook" content={"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content."}/>
                    <TextDescription special={false} heading="Setting up the Node Package" content={"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content."}/>
                    <TextDescription special={false} heading="Changing Project Theming" content={"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content."}/>
                </div>

                <StorybookButton/>
            </div>
        </div>
    )
}