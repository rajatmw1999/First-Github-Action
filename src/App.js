import './App.css';
import jaqen from './images/jaqen.gif'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={jaqen} className="App-logo" alt="logo" />
        <p>
          <i>A girl must serve the many face gods.</i>
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
