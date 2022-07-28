import React from 'react'
import LOGO from '../assets/LOGO.png'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <header>
      <img src={LOGO} alt="logo" />
      <div className="navigation">
        <ul>
          <Link to="/">
            <li>Accueil</li>
          </Link>
          <Link to="/apropos">
            <li>A propos</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

export default header
