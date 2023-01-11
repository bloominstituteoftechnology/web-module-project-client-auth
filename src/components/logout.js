import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    function confirm(){
        axios.create({ headers: { Authorization: token}})
        .post(`http://localhost:9000/api/logout`)
            .then(({data}) => 
            {
                localStorage.setItem('token', '' )
                navigate('/')
            })
    }

    return(
        <button onClick={() => confirm()}>Logout</button>
    )

}

export default Logout;