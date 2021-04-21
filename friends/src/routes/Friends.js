import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../authorization/axiosWithAuth";
// import axios from "axios";
const Friends = () => {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		axiosWithAuth()
			.get("http://localhost:5000/api/friends")
			.then((res) => {
				console.log(res);
				setFriends(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
	console.log(friends);
	return (
		<div>
			<h1>PROTECTED</h1>
			{friends.map((friend) => {
				return <p>{friend.name}</p>;
			})}
		</div>
	);
};

export default Friends;
