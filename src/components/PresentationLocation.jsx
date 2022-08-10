import React from 'react'
import star from '../assets/star.png'

const PresentationLocation = (logement) => {
  const maison = logement.logement
  const tag = maison.tags
  console.log(tag)
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
          <img className="star" src={star} alt="etoile" />
        </div>
      </div>
    </div>
  )
}

export default PresentationLocation
