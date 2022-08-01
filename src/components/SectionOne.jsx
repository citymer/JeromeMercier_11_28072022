import React from 'react'
import Background from '../assets/Background.png'

const Section = () => {
  return (
    <div>
      <div className="section">
        <div className="centrage">
          <div className="contentImage">
            <img className="img" src={Background} alt="" />
          </div>
          <div className="contentTitre">
            <h1>Chez vous,partout et ailleurs</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
