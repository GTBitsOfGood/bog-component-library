import '../css/Card.css';

function Button(props) {
  return (
      <div className="card">
          <img src={props.img} alt={props.heading + "_image"}/>
          <div>
          <h3>{props.heading}</h3>
          <p className="card-content">{props.content}</p>
          </div>
      </div>
  );
}

export default Button;