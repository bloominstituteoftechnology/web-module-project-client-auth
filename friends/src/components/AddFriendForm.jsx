import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../axiosWithAuth";

const AddFriendForm = () => {
  const history = useHistory();
  const initialFormValues = {
    id: "",
    name: "",
    age: "",
    email: "",
  };
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFriend = { ...formValues, id: Date.now() };
    axiosWithAuth()
      .post("/friends", newFriend)
      .then(() => {
        history.push("/friends");
      });
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        placeholder="name"
      />
      <input
        type="text"
        name="age"
        value={formValues.age}
        onChange={handleChange}
        placeholder="age"
      />
      <input
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        placeholder="email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddFriendForm;
