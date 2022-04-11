import '../css/TextDescription.css';

function TextDescription(props) {
  return (
    <div className={props.className}>
        {props.special ? <h1>{props.heading}</h1> : <h2>{props.heading}</h2>}
        <p>{props.content}</p>
    </div>
  );
}

TextDescription.defaultProps = {
  className: 'text-description-container'
};

export default TextDescription;