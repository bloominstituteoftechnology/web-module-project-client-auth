import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import './styles.css';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const theme =
{
    primaryColor: "#284B63",
    secondaryColor: "#D9D9D9",
    accentColor: "#3C6E71",
    black: "#353535",
    white: "FFFFFF",
};

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router>
            <App />
        </Router>
    </ThemeProvider>,
    document.getElementById('root')
);

