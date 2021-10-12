import React, { useState } from "react";
import axios from "axios";

import "../App.css";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friendslist");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <form onSubmit={login}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>

        <div className="button">
          <button>Log In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
