import logo from './logo.svg';
import './App.css';

import TruncateText from './TruncateText';

function App() {
  return (
    <>
      <div style={{ margin: '16px' }}>
        <div style={{ border: '1px dotted gray', width: '360px' }}>
          <TruncateText>Derpity derp derp</TruncateText>
        </div>
      </div>
      <div style={{ marginTop: '16px' }} className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
