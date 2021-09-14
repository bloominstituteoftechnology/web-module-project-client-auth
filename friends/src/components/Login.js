import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const initialFormValues = { username: "", password: "" }

function Login() {
  const { push } = useHistory();
  const [ formValues, setFormValues ] = useState(initialFormValues);

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", formValues)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        push("/friends");
      })
      .catch((err) => console.log(err.message));
  };

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input 
        id="username"
        name="username"
        type="text" 
        value={formValues.username} 
        onChange={handleChange} 
      />
      <label htmlFor="password">Password</label>
      <input 
        id="password"
        name="password"
        type="password" 
        value={formValues.password} 
        onChange={handleChange} 
      />
      <button>Login</button>
    </form>
  );
}

export default Login;