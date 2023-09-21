import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./Login.css";
import loginIcon from './images.png'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  //display error message for 5s
  useEffect(() => {
    let timeout;

    if (error) {
      timeout = setTimeout(() => {
        setError("");
      }, 5000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/giphygallery");
    } catch (e) {
      if (e.code === "auth/invalid-login-credentials") {
        setError(
          "Ooops! Invalid login credentials. You do not have an account with Timothy, pls click the Sign up to register."
        );
      } else {
        setError(e.message);
      }
      console.error(e);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-img">
          <img src={loginIcon} alt="login icon" />
        </div>
        <div className="error-message">{error && <p>{error}</p>}</div>
        <form onSubmit={handleSubmit}>
          <div className="email">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Valid Email ID "
            />
          </div>
          <div className="password">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Valid password"
            />
          </div>
          <div className="create-acct">
            <p>
              Don't have an account yet?{" "}
              <Link to="/signup" className="underline">
                Sign up.
              </Link>
            </p>
          </div>
          <div className="login-btn">
            <button>Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
