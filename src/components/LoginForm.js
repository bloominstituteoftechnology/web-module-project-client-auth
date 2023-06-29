import React, { useState } from "react";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="username">USERNAME</label>
        <input
          onChange={handleChange}
          type="text"
          id="username"
          name="username"
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
