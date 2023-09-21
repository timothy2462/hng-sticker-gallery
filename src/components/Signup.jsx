import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./Login.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="create-account">
          <p>Create a free account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="email">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className=""
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
          <div className="have-acct">
            <p>
              Already have an account ?
              <Link to="/" className="underline">
                Sign in.
              </Link>
            </p>
          </div>
          <div className="signup-btn">
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
