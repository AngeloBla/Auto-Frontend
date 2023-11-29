import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Login from './components/login';
import Konfig from './components/konfig';
import { Account } from './components/Accounts/Account';
import MitarbeiterDashboard from './components/dashboard';
import Signup from './components/signup';
import ChangePassword from './components/Accounts/ChangePassword';
import VerifyEmail from './components/verifyEmail';
import Lager from './components/lager';
import Konstruktion from './components/konsturktion';



const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verifyEmail" element={<VerifyEmail />} />
      <Route path="/login" element={<Account><Login /></Account>} />
      <Route path="/changepassword" element={<Account><ChangePassword /></Account>} />
      <Route path="/konfig" element={<Konfig />} />
      <Route path="/dashboard" element={<MitarbeiterDashboard />} />
      <Route path="/lager" element={<Lager />} />
      <Route path="/konsturktion" element={<Konstruktion />} />
    </Routes>
  </Router>
);