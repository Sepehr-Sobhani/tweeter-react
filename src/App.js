import logo from './logo.svg';
import './App.css';

function App() {
  const message = "I'm a message"
  const buttonStyle = {fontSize:"4em", backgroundColor:"red"}

  return (
    <div className="App">
      <p>{message}</p>
      <button style={buttonStyle}>I am button</button>
    </div>
  );
}

export default App;
