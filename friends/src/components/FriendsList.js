import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from './Friend';
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddFriendForm from './AddFriendForm';


const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        // console.log('FriendList.js ln:9 useEffect Fired');
        getData();
        /*eslint-disable-next-line */
    }, [])

    const getData = () => {
        // console.log('FriendsList.js ln:18 getData friends:', friends);
        axiosWithAuth()
            .get("/friends")
            .then((res) => {
                // console.log('FriendsList.js ln:17 res.data: ', res.data);
                setFriends(
                    res.data
                );
                // console.log('FriendsList.js ln:26 res.data: ', res.data);
            })
    }

    return (
        <Container>
        <header>
        <h1 id="hide">FRIENDS LIST</h1>
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
                <Link to="/">Created By</Link>
            </span>
        </nav>
    </header>
        <div className="friends-container">
            {
                friends.map(friend => {
                    return <Friend key={friend.id} friend={friend} />
                })
            }
            <AddFriendForm friends={friends}/>
        </div>
        </Container>
    )
}

export default FriendsList

const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1571292098320-997aa03a5d19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzg2fHxiYWNrZ3JvdW5kJTIwZm9yJTIwdGV4dCUyMGZyaWVuZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .whole {
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .main {
    background: white;
    width: 40%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    border: 10px double #284b63;
  }

  .main h1 {
    margin: 0 auto;
    font-size: 60px;
    text-align: center;
    color: #284b63;
  }

  .main h3 {
    padding: 3%;
    font-size: 15px;
    color: #3c6e71;
  }

  .button-container {
    display: flex;
    margin-left: 25%;
  }

  .button-container a {
    display: flex;
    align-items: center;
    background: none;
    margin: 5%;
  }

  button {
    background-color: #284b63;
    padding: 15px;
    text-decoration: none;
    font-size: 15px;
    color: #d9d9d9;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    #hide {
      display: none;
    }
    .main {
      margin-top: 40%;
      height: 450px;
      width: 200px;
    }
    nav {
      width: 100%;
    }

    .button-container {
      margin-left: 13%;
      width: 100%;
    }
  }

  h1, h2{
      color: #d9d9d9;
  }

  @media (max-width: 800px) {
    font-size: 14px;
    #hide {
      display: none;
    }
    .main {
      margin-top: 40%;
      height: 450px;
      width: 500px;
    }
    nav {
      width: 100%;
    }
    .button-container {
      margin-left: 19%;
      width: 100%;
    }
  }
`;