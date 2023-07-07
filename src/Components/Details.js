import React from "react";
import "./LoginForm.css";

export default function Details(props) {
  return (
    <>
      <div className="container">
        <div className="text-center">
          <img
            src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
            class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
            width="200px"
            alt="profile"
          />
        </div>
        <h2>Login form</h2>
        <br />
        <form className="login-form" onSubmit={props.submit}>
        <div className="form-group">
            {props.msg}
          </div>
          <div className="form-group">
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="text" id="username" placeholder="Username" required />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">Sign Up</button>
          <br></br>
        </form>
        <div id="emailHelp" className="form-text text-center mb-5 text-dark">
          Registered?{" "}
          <a href="/" className="text-dark fw-bold" onClick={props.toggle}>
            {" "}
            Log In
          </a>
        </div>
      </div>
    </>
  );
}
