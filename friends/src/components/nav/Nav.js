import React, { useState, useEffect } from 'react'
import './styles.css'
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title">
                Friends
                </div>
            </div>
            <div className="nav-btn">
            <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
  
    <div className="nav-links">
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/logout'>Logout</Link>
            <Link to='/protected'>Friends</Link>
    </div>
</div>
    )
}

export default Nav