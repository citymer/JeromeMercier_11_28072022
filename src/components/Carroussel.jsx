import React from 'react'
import precedent from '../assets/precedent.png'
import suivant from '../assets/suivant.png'
import Background from '../assets/Background.png'

const Carroussel = () => {
  return (
    <div className="carroussel">
      <button className="precedent">
        <img src={precedent} alt="precedent" />
      </button>
      <img className="appartement" src={Background} alt="appartement" />
      <button className="suivant">
        <img src={suivant} alt="suivant" />
      </button>
    </div>
  )
}

export default Carroussel
