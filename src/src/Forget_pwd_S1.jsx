import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Forget_pwd_S1({ onchange }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onchange(2);
  };
  return (
    <div>
      <div className="login">
        <div className="login-body">
          <div className="login-title">
            <h2>Reset your password</h2>
          </div>

          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className="login-input">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Please enter your email to search for your account."
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login-btn">
                <button>Continue</button>
              </div>
            </form>
            <h4>
              already have an account? <Link to="/login">Login</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
