import '../css/GithubButton.css';

function Button(props) {
  return (
      <a 
        href="https://github.com/GTBitsOfGood/bog-component-library"
        alt="link_to_github"
        className="github-button"
        target="_blank"
        rel="noreferrer"
      >
        View on
        <img src={props.logo} className="github-button-image" alt="github_logo"/>
        Github
      </a>
  );
}

export default Button;