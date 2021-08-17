import React from 'react';
import axiosWithAuth from '../Authorization/axiosWithAuth';


export default class Friends extends React.Component {
    state = {
        friends: []
    };

    componentDidMount(){
        this.getData();
    }

    getData=()=>{
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res=>{
                this.setState({
                    friends: res.data
                })
            })
            .catch(err=>{
                console.log(err);
            });
    };

    formatData=()=>{
        const formattedData = [];
        this.state.friends.forEach((friend, index)=>{
            formattedData.push({
                id: index,
                name: friend.name,
                age: friend.age,
                email: friend.email
            });
        });
        return formattedData;
    };

    render() {
        const friends = this.formatData()
        return (
            <div>
                {friends.map(friend => (
                    <div key={friend.id}>
                        <h3>{friend.name}</h3>
                        <p>{friend.name} is {friend.age} years old.</p>
                        <p>Their email is {friend.email}.</p>
                    </div>
                ))}
            </div>
        )
    }
}
