import '../css/FigmaButton.css';
import logo from '../assets/figma_logo.png';

function Button() {
  return (
      <a 
        href="https://www.figma.com/file/DEfDgRT4G9732YxrqTqq8V/BoG-Design-System-(Working-File)?node-id=2%3A3&fuid=801843250521140243"
        alt="link_to_figma"
        className="figma-button"
        target="_blank"
        rel="noreferrer"
      >
        View on
        <img src={logo} className="button-image" alt="figma_logo"/>
        Figma
      </a>
  );
}

export default Button;