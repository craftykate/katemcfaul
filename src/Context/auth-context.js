// Packages
import React from 'react'

let logoutTimer

const AuthContext = React.createContext({
  isLoggedIn: false,
  email: '',
  token: '',
  login: (email, token) => {},
  logout: () => {},
})
AuthContext.displayName = 'AuthContext'

const calculateExpTime = (expTime) => {
  const now = new Date().getTime()
  const formattedExpTime = new Date(expTime).getTime()
  return formattedExpTime - now
}

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token')
  const storedExpTime = localStorage.getItem('expiration')

  const remainingTime = calculateExpTime(storedExpTime)

  if (remainingTime <= 120000) {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('expiration')
    return null
  }

  return { token: storedToken, duration: remainingTime }
}

export const AuthContextProvider = ({ children }) => {
  const tokenData = retrieveStoredToken()
  const initialToken = tokenData?.token || null
  const storedUserEmail = localStorage.getItem('email')
  const [token, setToken] = React.useState(initialToken)
  const [email, setEmail] = React.useState(storedUserEmail)

  const userIsLoggedIn = !!token

  const logOutHandler = React.useCallback(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('expiration')
    setEmail('')
    setToken('')

    if (logoutTimer) clearTimeout(logoutTimer)
  }, [])

  const logInHandler = (email, token, expirationTime) => {
    localStorage.setItem('token', token)
    localStorage.setItem('email', email)
    localStorage.setItem('expiration', expirationTime)
    setEmail(email)
    setToken(token)

    const remainingTime = calculateExpTime(expirationTime)
    logoutTimer = setTimeout(logOutHandler, remainingTime)
  }

  React.useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logOutHandler, tokenData.duration)
    }
  }, [tokenData, logOutHandler])

  const contextValue = {
    isLoggedIn: userIsLoggedIn,
    email,
    token,
    login: logInHandler,
    logout: logOutHandler,
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export default AuthContext
