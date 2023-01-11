import React, { Component } from "react";
import { Route, Navigate, Routes } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    if(localStorage.getItem('token').length < 5){
        return <Navigate to="/" />
    }

    return children;
}

export default PrivateRoutes