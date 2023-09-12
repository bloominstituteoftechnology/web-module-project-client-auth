import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
    return localStorage.getItem('token') ? props.children : <Navigate to='/' />
  }
export default PrivateRoute;