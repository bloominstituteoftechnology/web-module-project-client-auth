import React, { useEffect } from "react";
import axiosWithAuth from './../Components/utils/AxiosWithAuth';

const Logout = (props) => {

    useEffect(()=> {
        axiosWithAuth()
            .post('http://localhost:5000/api/logout')
            .then(resp=>{
                localStorage.removeItem("token");
                props.history.push('/');
            }).catch(err=> {
                console.log(err);
            })
    }, []);

    return(<div></div>);
}

export default Logout;