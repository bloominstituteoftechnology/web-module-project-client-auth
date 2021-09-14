import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
// import Logout from './components/Logout';
// import './App.css';
import styled from 'styled-components';
const StyledBody = styled.div`
  background-color: ${({ theme }) => theme.secondaryColor};
  header {
    background-color: ${({ theme }) => theme.primaryColor};
  }

  header nav a {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
  header nav a:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;

function App() {
  return (
    <Router>
    <div className="App">
      <StyledBody className="App-header">
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/login"><Login /></Route>
        </Switch>
      </StyledBody>
    </div>
    </Router>
  );
}

export default App;
