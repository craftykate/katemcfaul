// Packages
import React from 'react'
import { useHistory } from 'react-router'
// Context
import AuthContext from 'Context/auth-context'
// Components
import Login from './Login/Login'

const Admin = () => {
  const auth = React.useContext(AuthContext)
  const history = useHistory()

  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    if (auth.isLoggedIn) {
      history.goBack()
    }
  })

  return <Login error={error} setError={setError} />
}

export default Admin
