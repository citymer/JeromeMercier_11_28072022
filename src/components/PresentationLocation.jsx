import React from 'react'
import logo from '../logo.svg'
import star from '../assets/star.png'

const PresentationLocation = () => {
  return (
    <div className="contentInfo">
      <div className="titreEtTag">
        <h1>Cozy loft on the Canal Saint-Martin</h1>
        <h2>Paris, île-de-France</h2>
        <div className="tag">
          <p className="textTag">Cozy</p>
        </div>
      </div>
      <div className="portraitEtEtoile">
        <div className="nomEtPortrait">
          <h4>Alexandre Dumas</h4>
          <img className="portrait" src={logo} alt="portrait" />
        </div>
        <div className="etoiles">
          <img className="star" src={star} alt="etoile" />
        </div>
      </div>
    </div>
  )
}

export default PresentationLocation
