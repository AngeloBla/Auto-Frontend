import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from "./Accounts/Account";
import Navbar from './navbar'; 

const Login = () => {
  // State variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mitarbeiter, setMitarbeiter] = useState(false);
  const [kunde, setKunde] = useState(false);

  // React Router navigate hook
  const navigate = useNavigate();

  // Context for authentication
  const { authenticate } = useContext(AccountContext);

  // Form submission handler
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      // Authenticate user
      const data = await authenticate(email, password);

      // Handle authentication result
      const accessToken = data.accessToken;
      if (accessToken) {
        if (accessToken.payload['cognito:groups'] === "Lager") {
          setMitarbeiter("Lager");
        } else if (accessToken.payload['cognito:groups'] === "Konstruktion") {
          setMitarbeiter("Konstruktion");
        } else if (accessToken.payload['cognito:groups'] === "Service") {
          setMitarbeiter("Service");
        } else if (accessToken.payload['cognito:groups'] === "Kunde") {
          setKunde(true);
        }

        // Redirect to the desired page after a successful login
        navigate('/');
      }
    } catch (error) {
      console.error("Failed to login", error);
      window.alert("Falsche E-Mail-Adresse oder Passwort");
    }
  };

  // Render JSX
  return (
    <div className="text-center">
      <Navbar/>
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        {/* Your SVG symbols */}
      </svg>

      <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        {/* Your theme toggle button and dropdown */}
      </div>

      <main className="form-signin w-100 m-auto">
        <form onSubmit={onSubmit}>
          <div className="mb-4" style={{ marginTop: '50px' }}>
            <img
              src="https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/firmenlogo/Logov2.png"
              alt=""
              width="180"
              height="100"
            />
          </div>
          <h1 className="h3 mb-3 fw-normal">Bitte melden Sie sich an</h1>
          <div style={{ width: '30%', margin:'auto' }} >
          <p>E-Mail Adresse</p>
          <div className="form-floating mb-3 d-flex justify-content-center">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="E-Mail Adresse"
              onChange={(event) => setEmail(event.target.value)}
              style={{ width: '300px' }}
            />
            
          </div>
          <p>Passwort</p>
          <div className="form-floating mb-3 d-flex justify-content-center">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Passwort"
              onChange={(event) => setPassword(event.target.value)}
              style={{ width: '300px' }}
            />
          </div>
          <div style={{ width: '30%', margin:'auto' }} >
          <button className="btn btn-primary btn-sm w-100 py-2" type="submit">
            Anmelden
          </button>
          </div>
          </div>
        </form>
      </main>

      {/* Include Bootstrap JS script */}
      <script
        src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default Login;