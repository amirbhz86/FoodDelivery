import React from 'react'
import LoginView from './login-view'
import { Props } from './models'

const Login = (props : Props ) => {
  return (
    <LoginView
    {...props}
    />
  )
}

export default Login