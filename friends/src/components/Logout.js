import React from "react";
import { Link, useHistory } from "react-router-dom";

function Logout () {
    let history = useHistory();
    const logout = () => {
        localStorage.removeItem("authToken");
        history.push("/")
    }
    return (
        <Link to="/" onClick={logout}>Logout</Link>
    )
}
export default Logout