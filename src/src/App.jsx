import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

import LoginForm_ from "./LoginForm_";
import SignUp from "./SignUp";
import Forget_pwd from "./Forget_pwd";
import NavBar from "./NavBar";
import Forget_pwd_S3 from "./Forget_pwd_S3";

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm_ />} />
          <Route path="/sing-up" element={<SignUp />} />
          <Route path="/forget-pswrd" element={<Forget_pwd />} />
          
          
        </Routes>
      </Router>
    </>
  );
};

export default App;
