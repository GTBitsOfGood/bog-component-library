import TextDescription from './TextDescription';
import ConponentButton from './ComponentButton';
import FigmaButton from './FigmaButton';
import GithubButton from './GithubButton';
import StorybookButton from './StorybookButton';
import homepage from '../assets/homepage_main.png';
import '../css/Home.css';

function Home() {
  return (
    <div className="home-container">
        <img src={homepage} alt="homepage_main_image"/>
        <div className="text-container">
            <TextDescription heading={"What is a design System?"} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
            <TextDescription heading={"Why does Bits of Good need one?"} content={"Our goal is to connect with local non-profits and work to make their job achievable through powerful web apps. We work with various non-profits."}/>
            <TextDescription heading="Get Started"/>
            <div className="button-container">
                <div>
                  <ConponentButton/>
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
