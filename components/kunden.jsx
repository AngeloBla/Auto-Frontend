// Einloggen.jsx
import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MyComponent from './mitarbeiter_login';
import PasswordReset from './password_reset';
import "bootstrap/dist/css/bootstrap.min.css";

class Einloggen extends Component {
  togglePassword = () => {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }

  render() {
    return (
      <div className="login-form">
        <Link to="/mitarbeiter_login" className="button">Mitarbeiter Login</Link>
        <h2>Login</h2>
        <form action="login.php" method="post">
          <div className="input-group">
            <label htmlFor="username">E-mail:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Passwort:</label>
            <div className="password-input">
              <input type="password" id="password" name="password" required />
              <input type="checkbox" id="show-password" onClick={this.togglePassword} />
              <label htmlFor="show-password">Passwort anzeigen</label>
            </div>
          </div>
          <div className="input-group">
            <input type="submit" value="Login" />
          </div>
        </form>
        <Link to="/password_reset" className="reset-password">Passwort zurücksetzen</Link>

        <Routes>
          <Route path="/mitarbeiter_login" element={<MyComponent />} />
          <Route path="/password_reset" element={<PasswordReset />} />
        </Routes>
      </div>
    );
  }
}

export default Einloggen;
