import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignIn({ error, LoginIn }) {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    LoginIn(details);
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Sign IN</h2>
          {error !== "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              onChange={(e) =>
                setDetails({ ...details, rememberMe: !details.rememberMe })
              }
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <input type="submit" value="Login" />
          <div className="form-group">
          <p>
              Don't have an account? <Link to="/signUp">Sign Up</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
