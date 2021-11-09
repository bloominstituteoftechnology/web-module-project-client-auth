import React, { useState } from 'react';
import { connect } from 'react-redux';
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
          })
          .catch(err=> {
            console.log(err);
          })
      };

    return(<form action="" className="form" onSubmit={login}>
        <h2>I am Login</h2>
        <input
            type="text"
            name="username"
            value={state.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          <button>Log in</button>
    </form>)
}

const mapStateToProps=state=>{
    
    return{
       state
    }
}
export default connect(mapStateToProps)(Login);