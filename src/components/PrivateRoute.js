import React, { Component } from "react";
import { Route, Navigate, Routes } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  if (localStorage.getItem("token").length < 5) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
