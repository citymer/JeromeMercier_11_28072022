import React from 'react'
import { Link } from 'react-router-dom'

const Erreur = () => {
  return (
    <div className="textLigne">
      <p className="four">404</p>
      <p className="oups">oups! La page que vous demandez n'existe pas.</p>
      <ul>
        <Link to="/">
          <li className="retourner">Retourner sur la page d'acceuil</li>
        </Link>
      </ul>
    </div>
  )
}

export default Erreur
