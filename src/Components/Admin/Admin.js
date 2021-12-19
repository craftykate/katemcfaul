// Packages
import React from 'react'
// Context
import AuthContext from 'Context/auth-context'
// Components
import Login from './Login/Login'

const Admin = () => {
  const auth = React.useContext(AuthContext)
  if (!auth.isLoggedIn) {
    return <Login />
  }
  return 'admin'
}

export default Admin
