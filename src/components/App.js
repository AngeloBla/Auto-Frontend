import React from "react";
import { Route, Routes } from 'react-router-dom';
import Einloggen from './kunden.jsx';
import PasswordReset from './password_reset.jsx';
import MyComponent from './mitarbeiter_login.jsx';


const App = () => {
  return (
    <>
    ,
    \<Routes>
      <Route  path="./kunden" component={Einloggen} />
      <Route  path="./password_reset" component={PasswordReset} />
      <Route  path="./mitarbeiter_login" component={MyComponent} />
      
    </Routes>
    </>
  );
};

export default App;
