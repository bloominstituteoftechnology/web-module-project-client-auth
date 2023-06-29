import React, { useEffect, useState } from "react";
import axios from "axios";

const FriendsList = () => {
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>FRIENDS LIST</h1>
      <ul></ul>
    </div>
  );
};

export default FriendsList;
