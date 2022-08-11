import React from 'react'
import precedent from '../assets/precedent.png'
import suivant from '../assets/suivant.png'

const Carroussel = (logement) => {
  console.log(logement)
  return (
    <div className="carroussel">
      <button className="precedent">
        <img src={precedent} alt="precedent" />
      </button>
      <img
        className="appartement"
        src={logement.logement[0]}
        alt="appartement"
      />
      <button className="suivant">
        <img src={suivant} alt="suivant" />
      </button>
    </div>
  )
}

export default Carroussel
