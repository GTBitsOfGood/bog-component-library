import '../css/ComponentButton.css';

function Button(props) {
  return (
      <button 
        alt="link_to_components"
        className="component-button"
        onClick={() => console.log("Hey")}
      >
        View Components →
      </button>
  );
}

export default Button;