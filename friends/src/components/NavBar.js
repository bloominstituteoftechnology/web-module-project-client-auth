import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/NavBar.css';

const NavBar = () => {

    return (
        <nav>
            <div className='left-box'>
                <NavLink className='link' to='/'>
                    <p>Home Page</p>
                </NavLink>
                <NavLink className='link' to='/protected'>
                    <p>Friend List</p>
                </NavLink>
            </div>
            <div className='right-box'>
                <NavLink className='button' to='/login'>
                    <button>Login</button>
                </NavLink>
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Friends_logo.svg/300px-Friends_logo.svg.png" /> */}
            </div>
        </nav>
    )

};

export default NavBar;