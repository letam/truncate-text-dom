import logo from './logo.svg';
import './App.css';

import TruncateText from './TruncateText';

const DUMMY_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

function App() {
  return (
    <>
      <div style={{ margin: '16px' }}>
        <div style={{ border: '1px dotted gray', width: '360px' }}>
          <TruncateText>{DUMMY_TEXT}</TruncateText>
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
