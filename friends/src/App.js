import React from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import { Switch, useHistory} from 'react-router';
import HomePage from './components/HomePage';
import Login from './components/Login';
import AddFriend from './components/AddFriend';




function App() {

  const history = useHistory()

 
  const accessToken = localStorage.getItem('token')
  

  if(!accessToken){
    history.push("/login")
  }else{
    history.push("/homepage")
  }


  return (
   
      <div className="App">
        <h2>Client Auth Project</h2>
        <Switch>
          <Route path="/login">
              <Login/>
          </Route>
          <Route path="/homepage">
              <HomePage/>
          </Route>
          <Route path="/addFriend">
              <AddFriend/>
          </Route>
        </Switch>
      </div>
   
  );
}

export default App;
