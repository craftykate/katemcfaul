// Packages
import React from 'react'

const AuthContext = React.createContext({
  isLoggedIn: false,
  email: '',
  onLogin: () => {},
  onLogout: () => {},
})
AuthContext.displayName = 'AuthContext'

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [email, setEmail] = React.useState('')

  React.useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn')
    const storedUserEmail = localStorage.getItem('email')

    if (storedIsLoggedIn === '1' && storedUserEmail) {
      setIsLoggedIn(true)
      setEmail(storedUserEmail)
    }
  }, [])

  const logInHandler = (email) => {
    localStorage.setItem('isLoggedIn', '1')
    localStorage.setItem('email', email)
    setIsLoggedIn(true)
    setEmail(email)
  }

  const logOutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('email')
    setIsLoggedIn(false)
    setEmail('')
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        email,
        onLogin: logInHandler,
        onLogout: logOutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
