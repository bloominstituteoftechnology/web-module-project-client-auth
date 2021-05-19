import React, { Component } from 'react'
import axios from 'axios'

export class FriendsPage extends Component {
    state = {
        friends: [
            // {
            //     id: '',
            //     name: '',
            //     age: '',
            //     email: '',
            // }
        ]
    }
    
    componentDidMount(){
        this.getData()
    }


    getData = () => {
        const token = localStorage.getItem('token')
        axios.get('http://localhost:5000/api/friends', {
            headers: {
                authorization: token
            }
        })
        .then(res=>{
            this.setState({
                friends: res.data
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }

    addFriend = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/friends', this.state.friends)
        .then(res=> {
            console.log(res);
        })
        .catch(err=> {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <h3> Add New Friends</h3>
                <form onSubmit={this.addFriend}>
                <label>
                        Name:
                    <input
                        type="text"
                        name="name"
                        value={this.state.friends.name}
                        onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Age:
                    <input
                        type="text"
                        name="age"
                        value={this.state.friends.age}
                        onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Email:
                    <input
                        type="email"
                        name="email"
                        value={this.state.friends.email}
                        onChange={this.handleChange}
                        />
                    </label>
                    <button> Add Friend </button>
                    </form>

                    <h3>
                        {this.state.friends.map((item) => (
                            
                            <p key={item.id}> {item.name} <br></br> Age: {item.age} <br></br> Email: {item.email} </p>

                        ))}
                    </h3>
            </div>
        )
    }
}

export default FriendsPage