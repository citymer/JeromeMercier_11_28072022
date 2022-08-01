import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = ({ id, titre, image }) => {
  return (
    <Link to={`/fiche-logement/${id}`}>
      <figure>
        <img className="imgLocation" src={image} alt="location" />
        <figcaption>{titre}</figcaption>
      </figure>
    </Link>
  )
}

export default Gallery
