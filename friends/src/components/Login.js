import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions';
import axios from 'axios';

const Login = (props) =>{
    const [state, setState] = useState({
        username:'',
        password:''
    });   

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    }
    const login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', state)
          .then(resp=> {
            localStorage.setItem('token', resp.data.payload);
            props.history.push('/friends');
            props.dispatch(logIn())
          })
          .catch(err=> {
            console.log(err);
          })
      };

    return(<form action="" className="form" onSubmit={login}>
        <h2>I am Login</h2>
        <div>
            <label>Username:</label><br/>
            <input
                type="text"
                name="username"
                value={state.username}
                onChange={handleChange}
            />
        </div>
        <div>
            <label>Password:</label><br/>
            <input
                type="password"
                name="password"
                value={state.password}
                onChange={handleChange}
            />
        </div>
        <button>Log in</button>
    </form>)
}

const mapStateToProps=state=>{
    
    return{
       state
    }
}
export default connect(mapStateToProps)(Login);