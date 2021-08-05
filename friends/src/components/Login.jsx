import React, { useState } from "react";
import axios from "axios";

const token =
  "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ";

const Login = () => {
  // state handling
  const initialFormValues = {
    username: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialFormValues);

  // helper functions
  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", token)
      .then((res) => console.log(res));
  };

  // constants
  const USER_NAME = "username";
  const PASSWORD = "password";

  return (
    <form action="submit" onSubmit={login}>
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
