import '../css/TextDescription.css';

function App(props) {
  return (
    <div className="text-description-container">
        <h1>{props.heading}</h1>
        <p>{props.content}</p>
    </div>
  );
}

export default App;