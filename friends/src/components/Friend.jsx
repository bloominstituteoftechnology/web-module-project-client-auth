import React from "react";

const Friend = (props) => {
  const { friend } = props;
  return (
    <div className="friend">
      <h4>{friend.name}</h4>
      <span>age: {friend.age}</span>
      <span>email: {friend.email}</span>
    </div>
  );
};

export default Friend;
