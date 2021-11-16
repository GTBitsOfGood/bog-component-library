import '../css/ComponentButton.css';

function Button(props) {
  return (
      <button 
        alt="link_to_components"
        className="component-button"
        onClick={() => props.handle(false)}
      >
        View Components →
      </button>
  );
}

export default Button;