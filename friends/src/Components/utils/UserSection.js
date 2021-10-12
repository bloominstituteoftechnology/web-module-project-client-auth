import React from "react";

const UserSection = () => {
	return (<p>Welcome {localStorage.getItem("username")}</p>);
}
export default UserSection;
