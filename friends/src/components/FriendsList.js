import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Friends from './Friends'


const FriendsList = () => {

	const [state, setState] = useState({
		friends: []
	})
	const token = localStorage.getItem('token')
	useEffect(() => {
		axios
			.get('http://localhost:5000/api/friends', {
				headers: {
					Authorization: token
				}
			})
			.then(res => {
				setState({
					...state,
					friends: res.data
				})
				console.log(res.data)
			})
			.catch(err =>{console.log(err)})
			
		},[])
	
	return (
		<div>
			<Friends data={state.friends} />
		</div>
	)
}

export default FriendsList