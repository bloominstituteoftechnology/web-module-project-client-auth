import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Login = () => {
    const [value, setValue] = useState({
        username: "",
        password: ""
    })


    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    const login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', value)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.token);

            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <div className="page">
            <StyledHeader>
                <h1 id="hide">Friends List</h1>
                <nav>
                    <span className="navspans">
                        <Link to="/login">Login</Link>
                    </span>
                    <span className="navspans">
                        <Link to="/">Dashboard</Link>
                    </span>
                    <span className="navspans">
                        <Link to="/">My Profile</Link>
                    </span>
                    <span className="navspans">
                        <Link to="/">Meet our Team</Link>
                    </span>
                </nav>
            </StyledHeader>

            <StyledMainPage>
                <StyledChild>
                    <section>
                        <h1>Login</h1>
                        <form onSubmit={login}>
                            <input
                                type="text"
                                name="username"
                                value={value.username}
                                onChange={handleChange}
                                placeholder='Username'
                                style={{ padding: '10px' }}
                            /><br />
                            <input
                                type="password"
                                name="password"
                                value={value.password}
                                onChange={handleChange}
                                placeholder='Password'
                                style={{ padding: '10px', margin: '10px' }}
                            /><br />
                            <button style={{ padding: '10px' }}>Log in</button>
                        </form>
                    </section>
                </StyledChild>
            </StyledMainPage>
        </div>

    )
}
export default Login

const StyledHeader = styled.header`
  color: ${({ theme }) => theme.secondaryColor};
`;

const StyledMainPage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  background-size: cover;
  height: 85.2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin-top: -2%;
    font-size: 3rem;
  }
`;

const StyledChild = styled.div`
  border: 0px;
  border-radius: 30px;
  background-color: #f2f2f2;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  padding: 0 5%;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    input {
      padding: 8%;
      border: none;
      border-radius: 25px;
    }
  }
  button {
    border-radius: 25px;
    width: 80%;
    height: 40px;
    font-size: 1.3rem;
    color: white;
    font-weight: 700;
    background: rgb(34, 193, 195);
    background: linear-gradient(90deg, rgba(34, 193, 195, 1) 0%, #284b63 100%);
    border: 0px;
    cursor: pointer;
    transition: opacity 0.25s ease-out;
  }
  button:hover {
    opacity: 0.85;
  }
`;
const StyledInputs = styled.div`
  margin-top: -5%;
  padding: 15% 0 15% 0;
  margin-left: -15%;
`;

