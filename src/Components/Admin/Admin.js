// Components
import Login from './Login/Login'

const Admin = ({ isLoggedIn, setIsLoggedIn }) => {
  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />
  }
  return 'admin'
}

export default Admin
