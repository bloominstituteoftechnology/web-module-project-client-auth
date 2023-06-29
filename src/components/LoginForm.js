import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const origState = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/login", credentials)
      .then((res) => localStorage.setItem("token", res.data.token))
      .catch((err) => setError(err.response.data.error));
    setCredentials({
      username: "",
      password: "",
    });
    navigate("/friends");
  };
  return (
    <div className="loginPage">
      <h1>Login</h1>
      <form onSubmit={login}>
        <div className="inputs">
          <label htmlFor="username">USERNAME</label>
          <input
            onChange={handleChange}
            type="text"
            id="username"
            name="username"
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
          <button>Submit</button>
        </div>
        {error === "" ? null : <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
