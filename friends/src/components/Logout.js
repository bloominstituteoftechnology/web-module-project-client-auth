import React, {useEffect} from 'react';
import axiosWithAuth from "../utils";

const Logout = (props)=> {
    useEffect(() => {
        axiosWithAuth()
        .post("/api/logout", {
        }).then(res => {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            window.location.pathname = '/login'
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return(<div></div>);
}

export default Logout;