import React from 'react'
import star from '../assets/star.png'

const PresentationLocation = (logement) => {
  const maison = logement.logement
  return (
    <div className="contentInfo">
      <div className="titreEtTag">
        <h1>{maison.title}</h1>
        <h2>{maison.location}</h2>
        <div className="tag">
          <p className="textTag">Cozy</p>
        </div>
      </div>
      <div className="portraitEtEtoile">
        <div className="nomEtPortrait">
          <h4>{maison.host.name}</h4>
          <img className="portrait" src={maison.host.picture} alt="portrait" />
        </div>
        <div className="etoiles">
          <img className="star" src={star} alt="etoile" />
        </div>
      </div>
    </div>
  )
}

export default PresentationLocation
