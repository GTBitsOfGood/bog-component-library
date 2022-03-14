import TextDescription from '../components/TextDescription';
import ComponentButton from '../components/ComponentButton';
import FigmaButton from '../components/FigmaButton';
import GithubButton from '../components/GithubButton';
import StorybookButton from '../components/StorybookButton';
import '../css/Home.css';
import useImage from '../imageRendering/ImageContext';

function Home(props) {
  const {imageURLS} = useImage();
  
  return (
    <div className="home-container">
      {/* Gets the image from the github and displays it on the component */}
        <img src={imageURLS["HOMEPAGE_MAIN"]} alt="homepage_main_image"/>
        <div className="text-container">
            <TextDescription heading={"What's this project about"} content={"A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications."}/>
            <TextDescription heading={"Why does Bits of Good need one?"} content={"There is confusion across projects about what design guidelines and component libraries to use. Using multiple different libraries and kits makes it difficult to stay consistent during development and to maintain a product after shipping."}/>
            <TextDescription heading="Get Started"/>
            <div className="button-container">
                <div>
                  <ComponentButton/>
                  <GithubButton/>
                </div>
                <div>
                  <StorybookButton/>
                  <FigmaButton/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
