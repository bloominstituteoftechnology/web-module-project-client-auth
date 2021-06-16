import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/NavBar.css';

const NavBar = () => {

    return (
        <nav>
            <div className='left'>
                <NavLink className='link' to='/'>
                    <p>Home Page</p>
                </NavLink>
                <NavLink className='link' to='/protected'>
                    <p>Friend List</p>
                </NavLink>
            </div>
            <div className='right'>
                <NavLink className='button' to='/login'>
                    <button>Login</button>
                </NavLink>
            </div>
        </nav>
    )

};

export default NavBar;
