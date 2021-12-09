// Components
import Header from './Header/Header'

const Layout = ({ children }) => {
  return (
    <div id='wrapper'>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
