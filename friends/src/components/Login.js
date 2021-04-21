import React, {useState} from "react";
import axios from "axios";
// import { axiosWithAuth } from "../utils/axiosWithAuth";


    const initialState = {
        username:'',
        password:'',
    }

const Login = () => {
    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
      };

      const login = (e) => {
        e.preventDefault();
        // make a POST request with the username and password as the data body
        axios
          .post("http://localhost:5000/api/login", state)
          .then((res) => {
            // res.data.payload
            // store the token in localStorage (sessions, cookies)
            window.localStorage.setItem("token", JSON.stringify(res.data.payload));
            // navigate to some landing/profile/dashboard page
            this.props.history.push("/protected");
            // function component => import the useHistory hook and use that to navigate
          })
          .catch((err) => console.log(err));
      };
      return (
          <form>
              <label htmlFor="username">Username</label>
              <input id='username' name='username' type='text' value={state.username} onChange={handleChange}/>
              <label htmlFor="password">Password</label>
              <input id='password' name='password' type ='password' value={state.password} onChange={handleChange}/>
              <button onClick={login}>submit</button>
          </form>
      )
}
export default Login;