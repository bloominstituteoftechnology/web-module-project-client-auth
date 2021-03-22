import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const logout = e => {
    localStorage.clear();
  }

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/friends">See Friends</Link>
        </li>
        <li>
          <Link onClick={logout} to="/">Logout</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
