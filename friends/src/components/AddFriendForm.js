import React, { useState } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { useHistory } from "react-router"
const initialValues = {
  name: "",
  age: "",
  email: "",
}

const AddFriendForm = () => {
  const { push } = useHistory()
  const [formValues, setFormValues] = useState(initialValues)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .post("/api/friends", formValues)
      .then((res) => {
        console.log(res)
        push("/friends")
      })
      .catch((err) => {
        console.log({ err })
      })
  }

  return (
    <div>
      <h3>Here you can add a new friend</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />

        <label htmlFor="age">Age</label>
        <input
          id="age"
          name="age"
          value={formValues.age}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />

        <button>Send</button>
      </form>
    </div>
  )
}

export default AddFriendForm
