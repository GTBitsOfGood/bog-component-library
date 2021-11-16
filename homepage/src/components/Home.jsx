import TextDescription from './TextDescription';
import ConponentButton from './ComponentButton';
import FigmaButton from './FigmaButton';
import GithubButton from './GithubButton';
import StorybookButton from './StorybookButton';
import homepage from '../assets/homepage_main.png';
import '../css/Home.css';

function Home(props) {
  return (
    <div className="home-container">
        <img src={homepage} alt="homepage_main_image"/>
        <div className="text-container">
            <TextDescription heading={"What is a design System?"} content={"A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications."}/>
            <TextDescription heading={"Why does Bits of Good need one?"} content={"There is confusion across projects about what design guidelines and component libraries to use. Using multiple different libraries and kits makes it difficult to stay consistent during development and to maintain a product after shipping."}/>
            <TextDescription heading="Get Started"/>
            <div className="button-container">
                <div>
                  <ConponentButton handle={props.handle}/>
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
