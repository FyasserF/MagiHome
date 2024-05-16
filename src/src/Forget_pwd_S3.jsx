import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Forget_pwd_S3() {
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="login">
        <div className="login-body">
          <div className="login-title">
            <h2>Recover your password</h2>
          </div>

          <div className="login-form">
            <form>
              <div className="login-input">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Please enter your new password."
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="login-input">
                <label htmlFor="password">Password confirmed</label>
                <input
                  type="password"
                  id="password1"
                  placeholder="Please confirm your password."
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="login-btn">
                <button type="submit">confirm</button>
              </div>
            </form>
            <h4>
              Don't have an account? <Link to="/sing-up">Sign Up</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
