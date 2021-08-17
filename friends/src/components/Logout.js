import React, { useEffect } from "react";
import axiosWithAuth from "./../utils/axiosWithAuth";

const Logout = (props) => {
  console.log(props);

  useEffect(() => {
    axiosWithAuth()
      .post("/logout")
      .then((res) => {
        localStorage.removeItem("token");
        localStorage.removeItem("username", res.data.username);
        props.history.push("/login");
      });
  }, []);

  return <div></div>;
};

export default Logout;
