// Packages
import React from 'react'
// CSS
import classes from './Header.module.css'
// Context
import AuthContext from 'Context/auth-context'
// UI
import TextButton from 'Components/UI/TextButton/TextButton'

const User = () => {
  const auth = React.useContext(AuthContext)
  return (
    auth.isLoggedIn && (
      <div className={classes.user}>
        Hello, {auth.email}{' '}
        <TextButton onClick={auth.logout}>(Logout)</TextButton>
      </div>
    )
  )
}

export default User
