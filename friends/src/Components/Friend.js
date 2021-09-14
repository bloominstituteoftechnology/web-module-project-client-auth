import React from "./Friend";

const Friend = (props) => {
  return (
    <div>
      <p>
        {props.friend.name} is {props.friend.age} years old and can be contacted
        at {props.friend.email}
      </p>
    </div>
  );
};

export default Friend;
