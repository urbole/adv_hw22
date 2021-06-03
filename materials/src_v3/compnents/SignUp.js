import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp({ GetUser }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "", updatesViaEmail: false });
  const [submit, setSubmit] = useState({isSubmit: false})

  const submitHandler = (e) => {
    e.preventDefault();
    GetUser(details);
    setSubmit({
      isSubmit: !submit.isSubmit
    })
    console.log(submit)
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>
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
              id="updatesViaEmail"
              name="updatesViaEmail"
              onChange={(e) =>
                setDetails({ ...details, updatesViaEmail: !details.updatesViaEmail })
              }
            />
            <label htmlFor="updatesViaEmail">I want to receive inspiration, marketing, promotion and updates
              via email</label>
          </div>
          <input type="submit" value="Sign Up" />
          {submit.isSubmit === true ? <div className="error">Now you can <Link to="/signIn">Sign In</Link></div> : ""}
          <div className="form-group">
            <p>
              Just signed In or already have an account?{" "}
              <Link to="/signIn">Sign In</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
