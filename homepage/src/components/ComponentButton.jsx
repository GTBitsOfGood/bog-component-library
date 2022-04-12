import '../css/ComponentButton.css';
import { useNavigate } from 'react-router'; 

function Button(props) {
  const navigate = useNavigate();
  
  return (
      <button 
        alt="link_to_components"
        className="component-button"
        onClick={() => navigate('/library-components')}
      >
        View Components →
      </button>
  );
}

export default Button;