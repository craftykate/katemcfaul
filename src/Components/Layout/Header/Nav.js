// Packages
import { NavLink } from 'react-router-dom'
// CSS
import classes from './Header.module.css'

const Nav = () => {
  return (
    <nav>
      <ul className={classes.nav}>
        <li>
          <NavLink exact to='/' activeClassName={classes.active}>
            Featured Projects
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' activeClassName={classes.active}>
            About Kate
          </NavLink>
        </li>
        <li>
          <NavLink to='/shop' activeClassName={classes.active}>
            Shop
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
