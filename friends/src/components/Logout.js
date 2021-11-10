import React, { useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = (props) => {
    useEffect(() => {
        axiosWithAuth().post("/api/logout", {

        }).then(response => {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            props.history.push("/login")

        }).catch(error => {
            console.error(error)
        })
    }, [])


    return(
        <div>
            {/* empty? */}
        </div>
    )
}