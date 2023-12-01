import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Userpool from "./Accounts/Userpool";
import Navbar from './navbar'; 


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    Userpool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
      navigate('/verifyEmail', { state: { email } });
    });
  };

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
          <h1 className="h3 mb-3 fw-normal">Bitte Registieren Sie sich</h1>
          <div style={{ width: '30%', margin:'auto' }} >
          <p>E-Mail Adresse</p>
          <div className="form-floating mb-3 d-flex justify-content-center">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(event) => setEmail(event.target.value)}
              style={{ width: '300px' }} // Adjust the width as needed
            />
            
          </div>
          <p>Passwort</p>
          <div className="form-floating mb-3 d-flex justify-content-center">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Passwort"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}"
              title="Muss mindestens einen Grossbuchstaben, einen Kleinbuchstaben, eine Zahl und ein Sonderzeichen enthalten."
              onChange={(event) => setPassword(event.target.value)}
              style={{ width: '300px' }} // Adjust the width as needed
            />
          </div>
          <div style={{ width: '30%', margin:'auto' }} >
          <button className="btn btn-primary btn-sm w-100 py-2" type="submit">
            Registieren
          </button>
          </div>
          </div>
        </form>
      </main>

      <script
        src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default Signup;
