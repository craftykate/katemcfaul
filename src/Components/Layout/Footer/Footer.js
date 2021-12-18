// Packages
import { Link } from 'react-router-dom'
// CSS
import './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>Site built by Kate McFaul</li>
        <li>
          <Link to='/admin'>Admin</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
