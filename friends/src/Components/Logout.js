import React, { useEffect, useHistory } from "react";
	//import { useHistory } from "react-router";
	

	import axiosWithAuth from "../utils/axiosWithAuth";
	

	const Logout = (props) => {
	    const {push} = useHistory();
	

	    useEffect(()=>{
	        axiosWithAuth()
	        .post('/logout')
	        .then(res => {
	            localStorage.removeItem('token')
	            push('/login')
	        })
	    }, []);
	    return (<div></div>)
	}
	

	export default Logout
