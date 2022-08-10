import React from 'react'
import starRed from '../assets/starRed.png'
import stargrey from '../assets/stargrey.png'

const PresentationLocation = (logement) => {
  const maison = logement.logement
  const tag = maison.tags
  const note = maison.rating

  const etoileRouge = <img className="star" src={starRed} alt="etoile" />
  const etoileVide = <img className="star" src={stargrey} alt="etoile" />
  const totalEtoile = [1, 2, 3, 4, 5]
  console.log(note)
  return (
    <div className="contentInfo">
      <div className="titreEtTag">
        <h1>{maison.title}</h1>
        <h2>{maison.location}</h2>
        <div className="contentTag">
          {tag.map((tague, index) => (
            <div className="tag" key={index}>
              <p className="textTag">{tague}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="portraitEtEtoile">
        <div className="nomEtPortrait">
          <h4>{maison.host.name}</h4>
          <img className="portrait" src={maison.host.picture} alt="portrait" />
        </div>
        <div className="etoiles">
          {totalEtoile.map((rangeElem) =>
            note >= rangeElem ? (
              <span key={rangeElem.toString()}> {etoileRouge} </span>
            ) : (
              <span key={rangeElem.toString()}> {etoileVide} </span>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default PresentationLocation
