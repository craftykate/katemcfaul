// Packages
import React from 'react'
// CSS
import './Header.module.css'
// Components
import User from './User'
import Links from './Links'
import Nav from './Nav'

const Header = () => {
  return (
    <header>
      <User />
      <h1>KATE MCFAUL</h1>
      <h2>PROGRAMMER, ARTIST, NERD</h2>
      <Links />
      <Nav />
    </header>
  )
}

export default Header
