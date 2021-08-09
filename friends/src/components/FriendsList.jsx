import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../axiosWithAuth";

const FriendsList = (props) => {
  const [list, setList] = useState([]);
  const history = useHistory();
  const logout = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/logout")
      .then(() => {
        localStorage.removeItem("token");
        history.push("/login");
      });
  };

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => setList(res.data));
  }, []);

  return (
    <div>
      <button onClick={logout}>Log Out</button>
      {list.length > 0 ? (
        <ul>
          {list.map((friend, index) => (
            <div className="friend" key={index}>
              <h4>{friend.name}</h4>
              <span>age: {friend.age}</span>
              <span>email: {friend.email}</span>
            </div>
          ))}
        </ul>
      ) : (
        <span>Fetching Friends...</span>
      )}
    </div>
  );
};

export default FriendsList;
