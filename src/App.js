import logo from './smartmitex-logo.png';
import './App.css';
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Follow our social networks
        </p>
        <ul>
          <li>
            <a
              className="App-link"
              href="https://twitter.com/smartmitex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              className="App-link"
              href="https://t.me/smartmitex_official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
            </a>
          </li>
        </ul>


      </header>
    </div>
  );
}

export default App;
