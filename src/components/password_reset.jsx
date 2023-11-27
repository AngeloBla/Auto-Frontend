import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PasswordReset extends Component {
  state = {
    email: '',
  };

  resetPassword = () => {
    const { email } = this.state;

    if (email) {
      const randomPassword = this.generateRandomPassword();
      alert(`Ein zufälliges Passwort wurde generiert: ${randomPassword}`);
      // Hier würde normalerweise der Code stehen, um das Passwort an die E-Mail-Adresse zu senden.
    } else {
      alert('Bitte geben Sie eine E-Mail-Adresse ein.');
    }
  };

  generateRandomPassword = () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let password = '';
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  render() {
    const { email } = this.state;

    return (
      <div>
        <Link to="/mitarbeiter_login" className="button">
          Mitarbeiter Login
        </Link>
        <Link to="/kunden" className="button">
          Kunden Login
        </Link>
        <h1>Passwort zurücksetzen</h1>
        <form id="resetForm">
          <label htmlFor="email">E-Mail Adresse:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
            required
          />
          <button type="button" onClick={this.resetPassword}>
            Passwort zurücksetzen
          </button>
        </form>
      </div>
    );
  }
}

export default PasswordReset;
