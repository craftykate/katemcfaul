// Components
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
  return (
    <div id='wrapper'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
