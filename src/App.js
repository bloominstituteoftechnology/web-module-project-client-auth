import React from 'react';
import './App.css';
import { 
  Routes, 
  Route, 
  Link, 
  Navigate} from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoutes from './components/PrivateRoutes';


function App() {

  return (
    <div className="App">
      <header className="App-header">
          <h2>Friends Database</h2>
          <div className="Link-container">
            <Link 
              className="App-link"
              to="login">
              Login.
            </Link>  
            <Link 
              className="App-link"
              to="/friends"
            >
                Friends List.
            </Link>
            <Link 
              className="App-link"
              to="/friends/add">
                Add Friends.
            </Link>
            <Link 
              className="App-link"
              to="logout">
                Logout.
            </Link>   
          </div>      
        </header>

      <Routes>
          <Route element ={<PrivateRoutes/>}>
            <Route
              element={<AddFriend/>}
              exact path="/friends/add" 
            />
            <Route
              element={<FriendList/>}
              exact path="/friends" 
            />
          </Route>
          <Route 
            element={<Navigate to="/"/>}
            exact path="/login"
          />
          <Route 
            element={<Logout/>}
            exact path="/logout" 
            />
          {/* displays Login comp */}
          <Route 
            element={<Login/>}
            exact path="/" 
          />
      </Routes>
  
  </div>
  );
}

export default App;
