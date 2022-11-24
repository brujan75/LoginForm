import React from "react";
import "./SignIn.css";
const SignIn = () => {
  return (
    <div className="bg">
      <div className="signin">
        <div class="signup">
          <h2>Sign Up</h2>
          <h3>It's quick and simple</h3>
          <form className="form">
            <div class="textbox">
              <input type="text" required />
              <label>Name</label>
              <span class="material-symbols-outlined">person</span>
            </div>
            <div class="textbox">
              <input type="email" required />
              <label>Email</label>
              <span class="material-symbols-outlined">mail</span>
            </div>
            <div class="textbox">
              <input type="password" required />
              <label>Password</label>
              <span class="material-symbols-outlined">key</span>
            </div>
            <p>
              Signed up already? <a href="#">Login here</a>
            </p>
            <button>
              Sign Up
              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
            <p className="salut">
              Forgot your credentials <a href="#">Click here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
