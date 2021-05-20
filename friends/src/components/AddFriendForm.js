import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router";

const initialValues = {
  name: "",
  age: "",
  email: "",
};

function AddFriendForm() {
  const { push } = useHistory();
  const [formValues, setFormValues] = React.useState(initialValues);

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", formValues)
      .then((res) => {
        push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h3> Add New Friend </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChanges}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          name="age"
          value={formValues.age}
          onChange={handleChanges}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChanges}
        />
        <button>Add Friend</button>
      </form>
    </div>
  );
}

export default AddFriendForm;
