// CSS
import './Header.modules.css'
// Components
import Links from './Links'
import Nav from './Nav'

const Header = () => {
  return (
    <header>
      <h1>KATE MCFAUL</h1>
      <h2>PROGRAMMER, ARTIST, NERD</h2>
      <Links />
      <Nav />
    </header>
  )
}

export default Header
