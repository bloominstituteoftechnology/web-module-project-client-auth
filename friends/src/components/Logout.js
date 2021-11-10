import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from "../utilitites/axiosWithAuth";
import { logOut } from "../actions";
import { connect } from 'react-redux';

const Logout = (props)=> {
    const { push } = useHistory;
    console.log('props from log out',useHistory())
    useEffect(()=> {
        axiosWithAuth()
            .post('/logout')
            .then(resp => {
                props.dispatch(logOut())
                localStorage.removeItem('token');
                props.history.push('/login');
            });
    }, []);
    return(<div></div>);
}

const mapStateToProps=state=>{
    return{
       state
    }
}
export default connect(mapStateToProps)(Logout);