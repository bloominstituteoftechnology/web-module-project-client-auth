import React, {useHistory} from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";


class AddFriend extends React.Component {
    state = {
        credentials: 
            {   
                id: '',
                name: '',
                age: '',
                email: '',
              }
    }
    handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

    handleOnSubmit = e => {
        axiosWithAuth.post('/friends', this.state.credentials)
        .then(res => {
            this.props.history.push('/friends')
        })
    }

    render(){
        return (
            <div>
                <form onSubmit = {this.handleOnSubmit} >
                    <input 
                    type="text"
                    name="name"
                    value={this.state.credentials.name}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="text"
                    name="age"
                    value={this.state.credentials.age}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="text"
                    name="email"
                    value={this.state.credentials.email}
                    onChange={this.handleChange}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}
export default AddFriend
