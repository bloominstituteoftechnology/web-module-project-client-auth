import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <div>
                <Login/>
            </div>
            <Switch>
                <Route path='/' component={Home}/>

            </Switch>
        </Router>
    )
}

export default App;
