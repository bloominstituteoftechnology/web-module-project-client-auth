import React from 'react'
import AddFriend from './AddFriends'
import {axiosWithAuth} from '../authorization/axiosAuth'
import axios from 'axios'

class FriendList extends React.Component {
state = {
    friends:[]
}

getFriends = () => {

    axiosWithAuth()
    .get('/api/friends')
    .then( res => {
console.log(res);

this.setState({...this.state,

friends: 
    [...res.data]
})})

 .catch(err => {
console.log(err.res)
})}

componentDidMount(){
this.getFriends()
}

render(){
return (
<div>

<AddFriend getFriends={this.getFriends} friends ={this.state.friends}/>

{this.state.friends.map((friend)=>{
return(
    <div className = "friend-list">
        <p className = "name"> {friend.name}</p>
        <div className = "info">
        <p className = "age"> Age: {friend.age}</p>
        <p className = "email"> Email: {friend.email}</p>
</div>
</div>    
)})}
</div>
)}
}
export default FriendList