import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  console.log(credentials);

  // let history = useHistory();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    // return credentials;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // make a POST request with the username and password as the data body
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        window.localStorage.setItem("token", JSON.stringify(res.data.payload));
        console.log("happy path:", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => {
        console.log("sad path:", err.response);
      });
  };
  return (
    // <div className="form-container">
    <form className="form" onSubmit={handleLogin}>
      <input
        type="text"
        name="username"
        placeholder="name"
        value={credentials.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button className="submit">Get Friends</button>
    </form>
    // </div>
  );
};

export default Login;
