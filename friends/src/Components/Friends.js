import React from 'react';
import axiosWithAuth from '../Authorization/axiosWithAuth';



export default class Friends extends React.Component {
    state = {
        friends: [],
        newFriend: {
            id: '',
            name: '',
            age: '',
            email: ''
        }
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

    handleSubmit=(e)=>{
        e.preventDefault()
        axiosWithAuth().post('http://localhost:5000/api/friends', {...this.state.newFriend, id: Date.now()})
        .then((res)=>{
            console.log('Trash', res)
            this.setState([...this.state.friend, res.data])
        })
    }

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
                <form onSubmit={this.handleSubmit}>
                    <h2>Add a Friend:</h2>
                    <label>Name:
                        <input type='text' name='friend' value={this.state.newFriend.name} onChange={(e)=>this.setState({...this.state, newFriend: {...this.state.newFriend, name: e.target.value} })} />
                    </label>
                    <label> Age:
                        <input type='number' name='age' value={this.state.newFriend.age} onChange={(e)=>this.setState({...this.state, newFriend: {...this.state.newFriend, age: e.target.value} })} />
                    </label>
                    <label>Email:
                        <input type='email' name='email' value={this.state.newFriend.email} onChange={(e)=>this.setState({...this.state, newFriend: {...this.state.newFriend, email: e.target.value} })} />
                    </label>
                    <br/>
                    <button>Add friend!</button>
                </form>
            </div>
        )
    }
}
