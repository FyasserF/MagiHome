import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Forget_pwd_S2({ onchange }) {
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onchange(3);
  };
  return (
    <>
      <div className="login">
        <div className="login-body">
          <div className="login-title">
            <h2>Enter the security code</h2>
          </div>

          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className="login-input">
                <label htmlFor="password">Verification code</label>
                <h4>We have sent your code to your email</h4>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter the code received"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="login-btn">
                <button type="submit">Continue</button>
              </div>
            </form>
            <h4>
              already have an account? <Link to="/login">Login</Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
