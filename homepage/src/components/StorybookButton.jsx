import '../css/StorybookButton.css';

function Button(props) {
  return (
      <a 
        href="https://6193f7d7f0559c003a605d4f-ysjolyadgi.chromatic.com/"
        alt="link_to_storybook"
        className="storybook-button"
        target="_blank"
        rel="noreferrer"
      >
        View on
        <img src={props.logo} className="button-image" alt="figma_logo"/>
        Storybook
      </a>
  );
}

export default Button;