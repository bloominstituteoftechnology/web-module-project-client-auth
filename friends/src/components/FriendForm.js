import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

class FriendForm extends React.Component {
    state = {
        friend:[]
    }

    handleChange = e => {
        this.setState({friend:{...this.state.friend, [e.target.name]: e.target.value, id: Date.now()}})
    }

    submit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/friends', this.state.friend)
        .then(res => {
            console.log('AXIOS - FRIENDS PUT RESPONSE:', res)
            this.props.history.push('/friends')
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        console.log(this.state)
        return(
            <div>
                <form onSubmit={this.submit}>
                    <div>
                        <label>Name:</label>
                        <input type='text' name='name' placeholder='Name' value={this.state.friend.name} onChange={this.handleChange} />
                        <label>Age:</label>
                        <input type='age' name='age' placeholder='Age' value={this.state.friend.age} onChange={this.handleChange} />
                        <label>Email:</label>
                        <input type='email' name='email' placeholder='Email' value={this.state.friend.email} onChange={this.handleChange} />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default FriendForm 