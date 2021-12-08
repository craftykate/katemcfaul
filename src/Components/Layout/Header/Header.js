// Packages
import { NavLink } from 'react-router-dom'
// CSS
import './Header.modules.css'

const Header = () => {
  const links = [
    {
      title: 'Github',
      link: 'https://github.com/craftykate',
      linkName: 'github.com/craftykate',
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/katemcfaul/',
      linkName: 'linkedin.com/in/katemcfaul',
    },
  ]

  return (
    <header>
      <h1>KATE MCFAUL</h1>
      <h2>PROGRAMMER, ARTIST, NERD</h2>

      <ul>
        {links.map((link) => (
          <li key={link.title}>
            {link.title}:{' '}
            <a href={link.link} target='_blank' rel='noopener noreferrer'>
              {link.linkName}
            </a>
          </li>
        ))}
      </ul>

      <nav>
        <ul className='nav'>
          <li>
            <NavLink exact to='/'>
              Featured Projects
            </NavLink>
          </li>
          <li>
            <NavLink to='/about'>About Kate</NavLink>
          </li>
          <li>
            <NavLink to='/shop'>Shop</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
