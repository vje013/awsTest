import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1>Hello from Amplify</h1>
        <p>🚀 Successfully deployed with AWS Amplify!</p>
        <p>Continuous deployment is working! 🎉</p>
      </header>
    </div>
  );
}

export default App;