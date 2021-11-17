import React, { useState } from "react"

const initialValues = { username: "", password: "" }

const [formValues, setFormValues] = useState({ username: "", password: "" })

const handleChanges = (e) => {}

const Login = () => {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        value={formValues.username}
        onChange={handleChanges}
      />
      <label htmlForf="password">Password</label>
      <input
        id="password"
        value={formValues.username}
        onChange={handleChanges}
      />
    </form>
  )
}

export default Login
