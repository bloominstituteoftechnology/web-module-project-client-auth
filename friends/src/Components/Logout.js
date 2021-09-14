import React, { useEffect } from "react";

import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = (props) => {
  useEffect(() => {
    axiosWithAuth()
      .post("/logout")
      .then((res) => {
        props.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div></div>;
};

export default Logout;
