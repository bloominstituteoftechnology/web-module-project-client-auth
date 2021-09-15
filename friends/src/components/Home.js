import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1548705085-101177834f47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
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

export default function Home() {
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
          <span className="navspans">
            <Link to="/logout">Logout</Link>
          </span>
        </nav>
      </header>
      <div className="whole">
        <div className="main">
          <h3>
            Tired of being Lonely? <br></br> Well, Build a friend list!
          </h3>
          <h1>
            Welcome to
            <br />
            The Friend List Creator
          </h1>
          <div className="button-container">
            <Link to="/Signup">
              <button className="create-acctBtn">Signup</button>
            </Link>
            <Link to="/login">
              <button className="loginBtn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
