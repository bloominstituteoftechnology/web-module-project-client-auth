import React, { useState, useHistory } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
  });
  console.log(credentials);

  // let history = useHistory();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    // make a POST request with the username and password as the data body
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        window.localStorage.setItem("token", JSON.stringify(res.data.payload));
        console.log("happy path:", res.data);
        // history.push("/protected");
      })
      .catch((err) => {
        console.log("sad path:", err);
      });
  };
  return (
    <div className="form-container">
      <form action="submit" className="form" onSubmit={login}>
        <input
          type="text"
          name="name"
          placeholder="name"
          // value={}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          // value={}
          onChange={handleChange}
        />
        <button className="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
