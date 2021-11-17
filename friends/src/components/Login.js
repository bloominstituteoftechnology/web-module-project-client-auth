import axios from "axios"
import React, { useState } from "react"
import { useHistory } from "react-router"
const initialValues = { username: "", password: "" }

const Login = () => {
  const { push } = useHistory()
  const [formValues, setFormValues] = useState(initialValues)

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:5000/api/friends", formValues)
      .then((res) => {
        console.log(res)
        window.localStorage.setItem("token", res.data.payload)
        push("/friends")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        value={formValues.username}
        onChange={handleChanges}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={formValues.password}
        onChange={handleChanges}
      />
      <button>Submit</button>
    </form>
  )
}

export default Login
