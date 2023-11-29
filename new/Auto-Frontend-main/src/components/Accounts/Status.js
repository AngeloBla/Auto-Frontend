import React, { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { AccountContext } from "./Account";

const Status = () => {
    const [status, setStatus] = useState(false);

    const { getSession, logout } = useContext(AccountContext);

    useEffect(() => {
        getSession().then(session => {
            console.log("Session: ", session);
            setStatus(true);
        })
        .catch((error) => {
            console.error(error);
        })
    }, [getSession]);

    const handleLogout = async () => {
        await logout();
        window.location.reload();
    };

    return (
        <div className="navbar-text">
            <ul className="navbar-nav">
                {status ? (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" onClick={handleLogout}>Logout</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/changepassword" >Change password</Link>
                        </li>
                    </>
                ) : (
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Status;