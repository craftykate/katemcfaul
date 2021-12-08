// Packages
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
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
  )
}

export default Nav
