import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App'

const root = createRoot(document.getElementById('root'))

root.render(
  // so you don't need to wrap the Routes inside App with a <Router>
  <Router>
    <App />
  </Router>
)
