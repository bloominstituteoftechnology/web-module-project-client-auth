import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import NewFriend from "./components/NewFriend";
import { Navbar, Nav, Container } from "react-bootstrap";

function App() {
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="App">
      <Router>
        <Container>
          <Navbar
            className="nav"
            variant="dark"
            expand="lg"
            style={{ backgroundColor: "#F64C3C" }}
          >
            <Navbar.Brand className="brand" style={{ color: "black" }}>
              Make Friends!
            </Navbar.Brand>
            <Navbar.Collapse
              className="nav-container"
              id="responsive-navbar-nav"
            >
              <Nav className="mr-auto">
                <Nav.Link className="nav-link" href="/login">
                  Login
                </Nav.Link>
                <Nav.Link className="nav-link" onClick={logout}>
                  Logout
                </Nav.Link>
                <Nav.Link className="nav-link">Protected Page</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        <Switch>
          <PrivateRoute exact path="/protected">
            <NewFriend />
            <FriendsList />
          </PrivateRoute>
          <Route exact path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
