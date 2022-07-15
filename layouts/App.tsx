import React from 'react';
import { Routes, Route } from 'react-router';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => {
  return (
    <Routes>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" element={LogIn} />
      <Route path="/signup" element={SignUp} />
    </Routes>
  );
};

export default App;