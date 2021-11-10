import React from 'react';
import { Link } from 'react-router-dom';

import '../CSS/Header.css';

const Header = () => {


    return(
        <nav className="nav-bar">
            <div className="left-links">
                {/* <Link className="link" to='/'>Home</Link>                 */}
            </div>
            <div className="right-links">
                <Link className="link" to='/login'>Login</Link>   
                <Link className="link" to='/logout'>Logout</Link>                             
            </div>
        </nav>
    )
}

export default Header;