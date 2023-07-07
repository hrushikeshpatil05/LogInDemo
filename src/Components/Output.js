import React from "react";
export default function Output(props) {
  return (
    <div className="container">
      <div className="text-center">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
          class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
          width="200px"
          alt="profile"
        />
      </div>
      <h2>User Login</h2>
      <br />
      <form className="login-form" onSubmit={props.login}>
      <div className="form-group">
            {props.msg}
          </div>
        <div className="form-group">
          <input name="email" type="email" id="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Log In</button>
        <br></br>
      </form>
      <div id="emailHelp" className="form-text text-center mb-5 text-dark">
        Not Registered?{" "}
        <a href="/" className="text-dark fw-bold" onClick={props.toggle}>
          {" "}
          Sign Up
        </a>
      </div>
    </div>
  );
}
