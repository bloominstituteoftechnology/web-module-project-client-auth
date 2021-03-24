import axios from 'axios';
import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsListForm extends React.Component{
    state = {
        newFriend : {
            name: '',
            age: '',
            email: '',
        }
    };

    handleSubmit = (e) => {
        e.preventDefault()

        axiosWithAuth()
        .post('http://localhost:5000/api/friends',this.state.newFriend)
        .then(res => {
            console.log(res)
            
        })
        .catch(err => {
            console.log(err)
        })


    }

    changeHandeler = (e) => {
        this.setState({
            newFriend:{
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state)
    }

    render(){
        return (
            <div className='formDiv'>
                <h2> Add a neu FRIEND!!!!!!!!!!!</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name: </label>
                    <input
                      type='text'
                      name='name'
                      value={this.state.newFriend.name}
                      onChange={this.changeHandeler}
                      placeholder='Name'
                    />
                    <label htmlFor='age'>Age: </label>
                    <input
                      type='text'
                      name='age'
                      value={this.state.newFriend.age}
                      onChange={this.changeHandeler}
                      placeholder='Age'
                    />
                    <label htmlFor='email'>Email: </label>
                    <input
                      type='email'
                      name='email'
                      value={this.state.newFriend.email}
                      onChange={this.changeHandeler}
                      placeholder='email@email.com'
                    />
                    <button>Submittify</button>
                </form>
            </div>
        )
    };
};

export default FriendsListForm;