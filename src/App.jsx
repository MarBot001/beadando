import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Időpontfoglaló</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Főoldal</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Időpontfoglalás</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="home container mt-4">
        <h1>Időpontfoglaló rendszer</h1>
      </div>
    </>
  );
}

export default App;
