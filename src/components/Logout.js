import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        axiosWithAuth().post("logout", {})
        .then(res => {
            localStorage.removeItem("token")
            navigate("/login")
        }).catch(err => console.log(err))
    }, [])

    return (<div></div>)
}

export default Logout;