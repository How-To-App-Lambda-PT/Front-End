import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

  const token = localStorage.token

  return (
    <Route
      {...rest} render={props => token ? <Component {...props} {...rest} />
        : <Redirect to='/' />} />
    // <Route {...rest} render={props => <Component {...props} {...rest} />} />
  )
}

export default PrivateRoute