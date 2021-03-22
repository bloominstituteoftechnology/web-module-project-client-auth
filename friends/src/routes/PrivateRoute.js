import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => 
        localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

export default PrivateRoute
