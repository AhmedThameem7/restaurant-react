import React, { useState } from "react";
import "./Login.css";
import {Link} from 'react-router-dom'
import Lottie from "lottie-react";
import animationData from "./images/animation.json";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailerr, setEmailerr] = useState("");
  const [passerr, setPasserr] = useState("");

  const handlesbmt = (e) => {
    e.preventDefault();

    let valid = true;
    if (email === "") {
      setEmailerr("Please enter the email id");
      valid = false;
    } else {
      setEmailerr("");
    }

    if (password === "") {
      setPasserr("Please enter the password");
      valid = false;
    } else if (password.length < 8) {
      setPasserr("Password must be more than 8 characters");
      valid = false;
    } else {
      setPasserr("");
    }

    if (valid) {
      const userData = {
        email: email,
        password: password
      };
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Login successful!");
      setEmail('');
      setPassword('');
    }

    
  };

  return (
    <div className="log_2">
      <div className="lotimg1">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div className="log-div">
        <form className="log-form" onSubmit={handlesbmt}>
          <legend className="log-leg">Login</legend>
          <label htmlFor="email">Email Id:</label>
          <input
            type="email"
            className="email-inp"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailerr && <div className="err">{emailerr}</div>}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="pass-inp"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passerr && <div className="err">{passerr}</div>}
          <div className="btnbox"><button className="log_btn_sbmt" type="submit">
            Submit
          </button>
          <Link to='/newuser'className="register">Register new user</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
