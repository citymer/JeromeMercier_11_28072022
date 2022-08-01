import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = ({ id, titre, image }) => {
  return (
    <Link to={`/fiche-logement/${id}`}>
      <img className="imgLocation" src={image} alt="location" />
      <p className="figcaption">{titre}</p>
    </Link>
  )
}

export default Gallery
