import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Verwende Link anstelle von 'a' für interne Links */}
        <Link className="navbar-brand" to="/">
          Astley Motors
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* Verwende Link für interne Links */}
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              {/* Verwende Link für interne Links */}
              <Link className="nav-link" to="/konfig">
                Konfigurator
              </Link>
            </li>
            <li className="nav-item">
              {/* Verwende Link für interne Links */}
              <Link className="nav-link" to="/signup">
                Registrierung
              </Link>
            </li>
            <li className="nav-item">
              {/* Verwende Link für interne Links */}
              <Link className="nav-link active" aria-current="page" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
