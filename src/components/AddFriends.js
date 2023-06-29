import React from "react";

const AddFriends = () => {
  const handleChange = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form>
        <div className="inputs">
          <h1>ADD FRIEND</h1>
          <label htmlFor="friendName">FRIEND EMAIL</label>
          <input
            onChange={handleChange}
            type="text"
            id="friendName"
            name="friendName"
          />
          <label htmlFor="friendEmail">FRIEND EMAIL</label>
          <input
            type="friendEmail"
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
