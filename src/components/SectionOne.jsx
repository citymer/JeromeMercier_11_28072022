import React from 'react'
import Background from '../assets/Background.png'

const Section = () => {
  return (
    <div>
      <div className="section">
        <div className="contentImage">
          <img className="background" src={Background} alt="" />
        </div>
        <div className="contentTitre">
          <h1>Chez vous,partout et ailleurs</h1>
        </div>
      </div>
    </div>
  )
}

export default Section
