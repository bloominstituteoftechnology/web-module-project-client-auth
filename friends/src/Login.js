import React, { useState } from "react";
import axios from "axios"
import { useHistory } from "react-router";

const initialValues = { username: "", password: ""}

const Login = () => {

  const { push } = useHistory()
  const [formValues, setFormValues] = useState(initialValues)


  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
      axios
      .post("http://localhost:5000/api/login", formValues)
      .then((res) => {
        window.localStorage.setItem("token", res.data.payload);
        push("/friends")
      })
      .catch((error) => (error.message))
  };

  return (
    <div>
      <h1>Frans</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          data-testid="username"
          name="username"
          value={formValues.username}
          onChange={handleChanges}
        />
        <br></br>
        <br></br>
        <label htmlFor="password">Password: </label>
        <input
          data-testid="password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChanges}
        />
        <br></br>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;