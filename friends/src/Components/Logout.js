import React, { useEffect } from "react";

import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = (props) => {
  useEffect(() => {
    axiosWithAuth()
      .post("/logout")
      .then((res) => {
        localStorage.removeItem("token");
        props.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="logout">
      <p>You have successfully logged out.</p>
    </div>
  );
};

export default Logout;
