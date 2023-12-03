import React from "react";
import { Link } from "react-router-dom";
import Status from "./Accounts/Status";
import { Account } from "./Accounts/Account";
import logo from './Logov2.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid justify-content-between">
                {/* Verwende Link anstelle von 'a' für interne Links - */}
                <Link className="navbar-brand" to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Logo" id="logo" style={{ marginBottom: '10px', marginLeft: '18px', width: '50px' }} />
                    <div style={{ fontSize: '14px', marginLeft: '10px' }}>Astley Motors</div>
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
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item me-3 d-flex align-items-center">
                            {/* Verwende Link für interne Links */}
                            <Link className="nav-link" to="/konfig">
                                Konfigurator
                            </Link>
                        </li>
                        <li className="nav-item me-3 d-flex align-items-center">
                            {/* Verwende Link für interne Links */}
                            <Link className="nav-link" to="/signup">
                                Registrierung
                            </Link>
                        </li>
                        <li className="nav-item me-3 d-flex align-items-center">
                            {/* Verwende Link für interne Links */}
                            <Account>
                                <Status />
                            </Account>
                        </li>
                        <li className="nav-item"></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;