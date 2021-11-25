import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          El Mistol Mueblería con React
        </p>
        <a
          className="App-link"
          href="https://www.elmistolmuebleria.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lucila Rodriguez Alfaro - Coderhouse React.js 19785
        </a>
      </header>
    </div>
  );
}

export default App;
