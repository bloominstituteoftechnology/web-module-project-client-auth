import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return(
        <div id="header-container">
            <div className="page-title">
                <h1>FRIENDS DATABASE</h1>
            </div>
            <nav>
                <Link to='/'><button>LOGIN.</button></Link>
                <Link to='/friendlist'><button>FRIENDLIST.</button></Link>
                <Link to='/addfriend'><button>ADDFRIEND.</button></Link>
                <Link to='/logout'><button>LOGOUT.</button></Link>
            </nav>
        </div>
    )
}

export default Header;