import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (<div>
		
				<Link to="/login">Login</Link>
				<br/>
				<Link to="/logout">Logout</Link>
			
	</div>);
}
export default Nav;