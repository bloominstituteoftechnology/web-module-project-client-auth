import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {

    const {logOut} = props

    return (
        <div>
            <nav>

            <Link to='/'>Home</Link>
        {localStorage.getItem('token') ? <Link onClick={logOut} to='/'>Log Out</Link> : <Link to='/login'>Login</Link>}
        {localStorage.getItem('token') && <Link to='/friends'>Friends</Link>}

            </nav>
        </div>
    )
}

export default Nav