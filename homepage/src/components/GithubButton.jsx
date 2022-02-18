import '../css/GithubButton.css';
import useImage from '../imageRendering/ImageContext';

function Button() {
  const {imageURLS} = useImage();
  return (
      <a 
        href="https://github.com/GTBitsOfGood/bog-component-library"
        alt="link_to_github"
        className="github-button"
        target="_blank"
        rel="noreferrer"
      >
        View on
        <img src={imageURLS["GITHUB_LOGO"]} className="github-button-image" alt="github_logo"/>
        Github
      </a>
  );
}

export default Button;