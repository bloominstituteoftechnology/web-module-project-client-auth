import React, { useState } from "react";

const Login = (props) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // constants
  const USER_NAME = "username";
  const PASSWORD = "password";

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
