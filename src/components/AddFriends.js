import React, { useState } from "react";

const AddFriends = () => {
  const [newFriend, setNewFriend] = useState({
    friendName: "",
    friendEmail: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form>
        <div className="inputs">
          <h1>ADD FRIEND</h1>
          <label htmlFor="friendName">FRIEND NAME</label>
          <input
            onChange={handleChange}
            type="text"
            id="friendName"
            name="friendName"
          />
          <label htmlFor="friendEmail">FRIEND EMAIL</label>
          <input
            type="email"
            id="friendEmail"
            name="friendEmail"
            onChange={handleChange}
          />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddFriends;
