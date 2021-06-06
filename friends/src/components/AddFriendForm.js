import React, { Component } from 'react';
import Axios from 'axios';

class AddFriendForm extends Component {

    state = {
        newFriend: {
            id: 0,
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            newFriend: {
                ...this.state.newFriend, [name]: (name === 'age') ? Number(value) : value
            }
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.newFriend);
        const token = localStorage.getItem('token');
        Axios.post('http://localhost:3003/api/friends', this.state.newFriend, {
            headers: {
                authorization: token,
            }
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    };

    render() {
        return (
            <div>
                <h2>New Friend</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={this.state.newFriend.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='age'
                        placeholder='Age'
                        value={this.state.newFriend.age}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={this.state.newFriend.email}
                        onChange={this.handleChange}
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }

};

export default AddFriendForm;



// import React from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
// import { useHistory } from "react-router";

// const initialValues = {
//     name: "",
//     age: "",
//     email: "",
// };

// function AddFriendForm() {
//     const { push } = useHistory();
//     const [formValues, setFormValues] = React.useState(initialValues);

//     const handleChanges = (event) => {
//         setFormValues({ ...formValues, [event.target.name]: event.target.value });
//     };
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axiosWithAuth()
//             .post("/api/friends", formValues)
//             .then((res) => {
//                 push("/friends");
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     return (
//         <div>
//             <h3> Add New Friend </h3>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor='name'>Name</label>
//                 <input
//                     id='name'
//                     name='name'
//                     value={formValues.name}
//                     onChange={handleChanges}
//                 />
//                 <label htmlFor='age'>Age</label>
//                 <input
//                     id='age'
//                     name='age'
//                     value={formValues.age}
//                     onchange={handleChanges}
//                 />
//                 <label htmlFor='email'> Email</label>
//                 <input
//                     id='email'
//                     name='email'
//                     value={formValues.email}
//                     onChange={handleChanges}
//                 />
//                 <button> Add Friend</button>
//             </form>
//         </div>
//     )
// };

// export default AddFriendForm;
