import React from 'react'
import axiosWithAuth from './../utilities/axiosWithAuth'

class NewFriends extends React.Component{
    state={
        friend:{
    
        }
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/friends', this.state.friend)
        .then(res=>{
            console.log('submit',res.data)
            this.props.getData()
        })
    };

    render(){
        return(
            <div>
                <form style={{marginBottom:'20px'}}>
                    <input 
                        type='text'
                        name='name'
                        value={this.state.friend.name}
                        onChange={this.handleChange}
                        placeholder='Name'
                        style={{marginRight:'10px',padding:'10px'}}
                    />
                    <input 
                        type='number'
                        name='age'
                        value={this.state.friend.age}
                        onChange={this.handleChange}
                        placeholder='Age'
                        style={{marginRight:'10px',padding:'10px'}}
                    />
                    <input 
                        type='email'
                        name='email'
                        value={this.state.friend.email}
                        onChange={this.handleChange}
                        placeholder='Email'
                        style={{marginRight:'10px',padding:'10px'}}
                    />
                    <button onClick={this.handleSubmit} style={{padding:'10px'}}>Add New Friend</button>
                </form>
            </div>
        )
    }
}

export default NewFriends