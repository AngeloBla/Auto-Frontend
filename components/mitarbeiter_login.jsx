// mitarbeiter_login.jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }

  togglePassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du die Logik für die Formulareinreichung hinzufügen
    // Beispiel: console.log('Formulardaten senden:', e.target.username.value, e.target.password.value);
  };

  render() {
    const { showPassword } = this.state;

    return (
      <div className="login-form">
        <h2>Mitarbeiter Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Mitarbeiter ID:</label>
            <input
              type="text"
              id="username"
              name="username"
              pattern="[0-9]+"
              title="Bitte geben Sie nur Zahlen ein."
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Passwort:</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                required
              />
              <input
                type="checkbox"
                id="show-password"
                onClick={this.togglePassword}
              />
              <label htmlFor="show-password">Passwort anzeigen</label>
            </div>
          </div>
          <div className="input-group">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    );
  }
}

export default MyComponent;
