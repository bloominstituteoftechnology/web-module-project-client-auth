import React from "react";
import {Link, useHistory} from 'react-router-dom'

export default function Logout() {

    const history = useHistory()

    const logout = () => {
        alert("You have been logged out. Thank you for visiting");
        localStorage.clear();
        history.push("/")
    }
    return (
        <div 
            className='d-flex flex-column justify-content-center align-items-center logout'
            style={{
                margin: "0vh auto",
                backgroundColor: 'transparent',
                height: '100vh',
              }}
        >
            <h4>Thank You For Visiting</h4>
            <Link 
             onClick={() => logout()}
             style={{
                margin: "5vh 0",
                fontSize: "3vh",
                color: "white",
                textDecoration: "none",
                border: '.05rem solid white',
                padding: '2rem 3rem',
                boxShadow:'0 0 1.5rem white',
                backgroundColor: '#222'
              }}
            >Logout</Link>

        </div>
    )
}