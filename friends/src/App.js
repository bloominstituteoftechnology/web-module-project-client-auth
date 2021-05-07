//import your dependencies & components
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login'; //create Login component
import EditFriend from './components/EditFriend'; //updating a friend's info
import DeleteFriend from './components/DeleteFriend'; //deleting a friend
import AddFriend from './components/AddFriend'; //creating a friend
import FriendsList from './components/FriendsList';//where we get our friends
//import any other components


import PrivateRoute from './components/PrivateRoute'; //--This will be where we create our Auth

//import axios from 'axios'; //don't need here


//Create Main App, routing all the pages, you will create the Private paths here
//CREATING ALL Routes, import every page you make a route for, and the private route
function App() {
  

  return (
    <Router>
      <div className='App'>
        {/* <ul>

          <li>
            <Link to="/api/login">Login</Link> 
          </li>

          <li>
            <Link to="/api/friends">Add Friend</Link>
          </li>

          <li>
            <Link to="/api/friends/:id">Update Friend</Link>
          </li>

          <li>
            <Link to="/api/friends/:id">Delete Friend</Link>
          </li>

          { <li>
            <Link to="/private">Private Page</Link>
          </li> }

        </ul> */}

        <Switch>
          <PrivateRoute exact path="/add-friend" component={AddFriend}/>
          <PrivateRoute exact path="/edit-friend/:id" component={EditFriend}/>
          <PrivateRoute exact path="/delete-friend" component={DeleteFriend}/>
          <PrivateRoute exact path="/protected" component={FriendsList}/>{/**'home page'where we see all our friends list, where we go after successfully logging in */}
          <Route path="/login" component={Login}/>
          <Route component={Login}/> {/*this is the default if neither are selected */}

        </Switch>
      </div>
    </Router>
  )
}

export default App;


