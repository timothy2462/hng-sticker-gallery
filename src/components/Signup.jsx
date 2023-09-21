import React, { useState } from "react";
// import { Auth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import "./Login.css";
import "../App.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    //todo sign in
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <form onSubmit={signUp}>
          <div className="create-acct">
          <p>Create Account</p>
          </div>
          <div className="email">
          <input
            type="email"
            placeholder="Enter a valid email address "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          </div>
            <div className="password">
          <input
            type="password"
            placeholder="Enter a valid password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          </div>
          <div className="signup-div">
          <button type="submit" className="signup-btn">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
