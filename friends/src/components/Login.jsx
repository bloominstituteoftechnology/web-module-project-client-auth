import React, { useState } from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import { useHistory } from "react-router-dom";

const Login = () => {
  // constants
  const USER_NAME = "username";
  const PASSWORD = "password";
  const initialFormValues = {
    USER_NAME: "",
    PASSWORD: "",
  };
  const history = useHistory();

  // state handling
  const [formValues, setFormValues] = useState(initialFormValues);
  const [credentials, setCredentials] = useState(formValues);

  // helper functions
  const login = (credentials) => {
    const { username, password } = credentials;
    axiosWithAuth()
      .post("/login", { username, password })
      .then((res) => {
        const { token } = res.data;
        console.log(`%ctoken: ${token}`, "color: green");
        localStorage.setItem("token", token);
        history.push("/friends");
      });
  };

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCredentials(formValues);
    setFormValues(initialFormValues);
    login(credentials);
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor={USER_NAME}>Username</label>
        <input
          type="text"
          name={USER_NAME}
          onChange={handleChange}
          placeholder={USER_NAME}
        />
        <label htmlFor={PASSWORD}>Password</label>
        <input
          type="password"
          name={PASSWORD}
          onChange={handleChange}
          placeholder={PASSWORD}
        />
        <button type="submit">Login</button>
      </fieldset>
    </form>
  );
};

export default Login;
