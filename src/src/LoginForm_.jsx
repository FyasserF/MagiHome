import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../public/Yasser_Imane.png";
import "./App.css";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [role, setRole] = useState("jobSeeker");
  //const navigate = useNavigate();

  const handleLogin = () => { };

  return (
    <div className="login">

      <div className="login-body">

        <div className="login-title">
          <h2>Welcome Back</h2>
        </div>
        <div className="login-with-google">
          <div></div>
        </div>
        <div className="login-sparate">
          <hr />
          <span>Or login with email</span>
          <hr />
        </div>
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <div className="login-input">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <div className="login-btn">
              <button type="submit">Login</button>
            </div>
          </form>
          <h4>
            Don't have an account? <Link to="/sing-up" >Sign Up</Link>
          </h4>
          <p> <Link to="/forget-pswrd">Forget password?</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
