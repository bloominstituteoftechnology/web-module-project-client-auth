import React from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../axiosWithAuth";

const FriendsList = (props) => {
  // const [list, setList] = useState([]);
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

  return (
    <div>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default FriendsList;
