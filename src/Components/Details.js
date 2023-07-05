import React from "react";
import "./LoginForm.css";

export default function Details(props) {
  return (
    <>
      <div className="container">
        <h2>Login form</h2>
        <br />
        <form className="login-form" onSubmit={props.submit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username"required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}
