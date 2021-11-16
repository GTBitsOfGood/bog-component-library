import '../css/TextDescription.css';

function App(props) {
  return (
    <div className="text-description-container">
        {props.special ? <h1>{props.heading}</h1> : <h2>{props.heading}</h2>}
        <p>{props.content}</p>
    </div>
  );
}

export default App;