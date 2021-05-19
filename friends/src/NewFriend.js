import React, { useState } from "react";
import axios from "axios"
import { useHistory } from "react-router";

const initialValues = { 
    id: 8,
    name: '',
    age: '',
    email: '',
}

const NewFriend = () => {

  const [formValues, setFormValues] = useState(initialValues)


  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
      axios
      .post("http://localhost:5000/api/friends", formValues)
      .then((res) => {
        return res.data;
      })
      .catch((error) => (error.message))
  };

  return (
    <div>
      <h3>New Fran</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChanges}
        />
        <br></br>
        <br></br>
        <label htmlFor="age">Age: </label>
        <input
          id="age"
          name="age"
          value={formValues.age}
          onChange={handleChanges}
        />
        <br></br>
        <br></br>
        <label htmlFor="email">Email: </label>
        <input
          data-testid="email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChanges}
        />
        <br></br>
        <button>ADD</button>
      </form>
    </div>
  );
};

export default NewFriend;