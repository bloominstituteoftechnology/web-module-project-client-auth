import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import initialCredentials from "../states/initialCredentials";

export default function Login() {
  const history = useHistory();
  const [credentials, setCredentials] = useState(initialCredentials);

  const handleChange = (e) => {
      console.log({[e.target.name]: e.target.value})
      const {name, value} = e.target;
      setCredentials((user) => ({
         ...user,
         [name]: value
      }));
  };

  const handleSubmit = (e) => {
    console.log("login fired", credentials);
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log("resolved token value", res.data.payload);
        localStorage.setItem("authToken", res.data.payload);
        alert("Credentials accepted. Welcome to the adidas product portal")
        history.push("/protected");
      })
      .catch((err) => {
        console.log("Login failed error: ", err);
      });
  };

  return (
    <>
      <div className={"parallax-wrapper4"} style={{marginTop: '98vh'}}>
        <div className={"content"}>
          <h4 style={{fontSize: '2rem'}}>Welcome to Adidas Product Portal</h4>
        </div>
      </div>
      <div className={"regular-wrapper4"}>
        <div className={"content d-flex flex-column align-content-center justify-content-center"}>
            <h4>Enter Login Credentials</h4>
            <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center' style={{maxWidth: '350px', padding: '5vh 3vw', border: '1px solid white', margin: '3vh auto'}}>
                <TextField
                    type="text"
                    name="username"
                    value={credentials.username}
                    variant="outlined"
                    label='username'
                    margin='dense'
                    color="primary"
                    style={{backgroundColor: 'white'}}
                    onChange={handleChange}
                />        
                <TextField
                    type="password"
                    name="password"
                    value={credentials.password}
                    variant="outlined"
                    label='username'
                    margin='dense'
                    color="primary"
                    style={{backgroundColor: 'white'}}
                    onChange={handleChange}
                />  
                <Button
                    onClick={handleSubmit}
                    style={{color: 'white', border: '.5px solid white'}}
                >
                    Step Inside
                </Button>
            </form>
        </div>
      </div>
    </>
  );
}
