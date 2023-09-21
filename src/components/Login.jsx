
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import Signup from "./Signup"; // Import the Signup component
import "./Login.css";
import "../App.css" 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false); // State to control Signup component visibility
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const signIn = (e) => {
    // Handle sign-in logic
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error code:", errorCode);
        console.error("Error message:", errorMessage);

        // Display an error message to the user
        setErrorMessage("Oppps! You don't have an account with Timothy. Please click Create account to create an account.");
      });
  };

  // Function to toggle between Login and Signup components
  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="login-container">
      {showSignup ? ( // Conditional rendering based on the showSignup state
        <Signup />
      ) : (
        <div className="login-form">
          <div className="login-icon">
            <img src="../public/images.png" alt="" />
          </div>
          <div className="error-message">
          {errorMessage && <p >{errorMessage}</p>}
          </div>
          <form onSubmit={signIn}>
            <div className="email">
            <input
              type="email"
              placeholder=" Valid email id "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="password">
            <input
              type="password"
              placeholder="valid password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <p onClick={toggleSignup} className="create-account">
              create an account?
            </p>
            <div className="login-div">
            <button type="submit" className=" login-btn">Login</button>
            </div>
            
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;

