import TextDescription from '../components/TextDescription';
// import ComponentButton from '../components/ComponentButton';
// import FigmaButton from '../components/FigmaButton';
// import GithubButton from '../components/GithubButton';
// import StorybookButton from '../components/StorybookButton';
import '../css/Home.css';
import useImage from '../imageRendering/ImageContext';
import NavBar from '../components/NavBar';

function Home(props) {
  const {imageURLS} = useImage();
  
  return (
     
    <div className="home-container">
      <NavBar className="nav-bar" />
      <div className="content-container">
        {/* Gets the image from the github and displays it on the component */}
        <img src={imageURLS["HOMEPAGE_MAIN"]} alt="homepage_main_image"/>
        <div className="text-container">
            <TextDescription heading={"What's this project about"} content={"A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications."}/>
            <TextDescription heading={"Who is it for"} content={"There is confusion across projects about what design guidelines and component libraries to use. Using multiple different libraries and kits makes it difficult to stay consistent during development and to maintain a product after shipping."}/>
        </div>
      </div>    
    </div>
  );
}

export default Home;
