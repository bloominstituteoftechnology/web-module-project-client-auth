import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCred({
      ...cred,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/api/login", cred)
      .then(res => {
        localStorage.setItem("token", res.data.token)
        navigate("/friends");
      }).catch(err =>
        console.log(err)
      )
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input id="username" onChange={handleChange} value={cred.username}></input>
        </label>
        <div>
          <label>
            Password:
            <input id="password" type="password" onChange={handleChange} value={cred.password}></input>
          </label>
        </div>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default Login;