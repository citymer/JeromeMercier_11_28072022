import React from 'react'
import LOGO from '../assets/LOGO.png'
import { NavLink } from 'react-router-dom'

const header = () => {
  return (
    <header>
      <img src={LOGO} alt="logo" />
      <div className="navigation">
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/apropos">
            <li>A propos</li>
          </NavLink>
        </ul>
      </div>
    </header>
  )
}

export default header
