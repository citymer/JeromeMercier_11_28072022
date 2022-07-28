import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Erreur404 = () => {
  return (
    <div>
      <Header />
      <h1>404</h1>
      <p>oups! La page que vous demandez n'existe pas.</p>
      <ul>
        <Link to="/">
          <li>Retourner sur la page d'acceuil</li>
        </Link>
      </ul>
    </div>
  )
}

export default Erreur404
