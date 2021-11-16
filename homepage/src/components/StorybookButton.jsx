import '../css/StorybookButton.css';
import logo from '../assets/storybook_logo.svg';

function Button() {
  return (
      <a 
        href="/"
        alt="link_to_storybook"
        className="storybook-button"
        target="_blank"
        rel="noreferrer"
      >
        View on
        <img src={logo} className="button-image" alt="figma_logo"/>
        Storybook
      </a>
  );
}

export default Button;