import React, { useState } from "react";
import { useHistory } from "react-router";
import axiosWithAuth from "../utills/axiosWithAuth";

const initialFormValues = {
  name: "",
  age: "",
  email: "",
};

function AddFriend() {
  const { push } = useHistory();
  const [ formValues, setFormValues ] = useState(initialFormValues);

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", formValues)
      .then((res) => {
        push("/friends")
      })
      .catch((err) => console.log(err.message));
  };

  return(
    <div>
      <h4>Inside AddFriend</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={formValues.name} onChange={handleChange}/>
        <label htmlFor="age">Age</label>
        <input id="age" name="age" value={formValues.age} onChange={handleChange}/>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" value={formValues.email} onChange={handleChange}/>
        <button>Add Friend</button>
      </form>
    </div>
  );
}

export default AddFriend;