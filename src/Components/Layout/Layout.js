// Components
import Header from './Header/Header'

const Layout = ({ children }) => {
  return (
    <div id='wrapper'>
      <Header />
      {children}
    </div>
  )
}

export default Layout
