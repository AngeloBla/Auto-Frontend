import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './components/style.css';
// import styles from "./components/style.module.css";
// import 'bootstrap/dist/css/sign-in.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Login from './components/login';
import Konfig from './components/konfig';
import { Account } from './components/Account/Account.js';
import Signup from './components/signup.jsx';
import ChangePassword from './components/Account/ChangePassword.js';



const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Account><Login /></Account>} />
      <Route path="/changepassword" element={<Account><ChangePassword /></Account>} />
      <Route path="/konfig" element={<Konfig />} />
    </Routes>
  </Router>
);
