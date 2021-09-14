import React, { useState } from "react";

const initialFormValues = { username: "", password: "" }

function Login() {
  const [ formValues, setFormValues ] = useState(initialFormValues);

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  return(
    <form>
      <label htmlFor="username">Username</label>
      <input 
        id="username"
        name="username"
        type="text" 
        value={formValues.username} 
        onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input 
        id="password"
        name="password"
        type="password" 
        value={formValues.password} 
        onChange={handleChange} />
    </form>
  );
}

export default Login;