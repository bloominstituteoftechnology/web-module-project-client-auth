import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../axiosWithAuth";
import Friend from "./Friend";

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

  const handleDetailClick = (e) => {
    e.preventDefault();
    getFriend(e.target.id);
  };

  const getFriend = (id) => {// I have no clue what to do with this returned data or how to render it into another component
    axiosWithAuth()
      .get(`/friends/${id}`)
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <button onClick={logout}>Log Out</button>
      {list.length > 0 ? (
        <ul>
          {list.map((friend, index) => (
            <div key={index}>
              <Friend friend={friend} />
              <button id={friend.id} onClick={handleDetailClick}>
                Details
              </button>
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
