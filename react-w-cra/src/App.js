import logo from "./logo.svg";
import "./App.css";

function App() {
  const message = "Hello Message";
  const buttonStyle = { fontSize: "4em", backgroundColor: "red" };
  return (
    <div className="App">
      <p>{message}</p>
      <p> {2 + 2}</p>
      <button id="superButton" style={buttonStyle}>
        {" "}
        I AM A BUTTON
      </button>
    </div>
  );
}

export default App;
