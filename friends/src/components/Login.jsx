import React, { useState } from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import { useHistory } from "react-router-dom";

const Login = () => {
  // constants
  const USER_NAME = "username";
  const PASSWORD = "password";
  const initialFormValues = {
    username: "",
    password: "",
  };
  const history = useHistory();

  // state handling
  const [formValues, setFormValues] = useState(initialFormValues);

  // helper functions
  const login = (e) => {
    const { username, password } = formValues;
    e.preventDefault();
    axiosWithAuth()
      .post("/login", {
        username,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/friends");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form action="submit" onSubmit={login}>
      <fieldset>
        <label htmlFor={USER_NAME}>Username</label>
        <input
          type="text"
          name={USER_NAME}
          onChange={handleChange}
          placeholder={USER_NAME}
          value={formValues.username}
        />
        <label htmlFor={PASSWORD}>Password</label>
        <input
          type="password"
          name={PASSWORD}
          onChange={handleChange}
          placeholder={PASSWORD}
          value={formValues.password}
        />
        <button type="submit">Login</button>
      </fieldset>
    </form>
  );
};

export default Login;
