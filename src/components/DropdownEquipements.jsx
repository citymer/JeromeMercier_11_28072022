import React from 'react'
import { useState } from 'react'
import Vector from '../assets/Vector.png'

const DropdownEquipements = (logement) => {
  const [toggles, setToggle] = useState(false)
  const toggleFunctions = () => {
    setToggle(!toggles)
  }
  const equipements = logement.logement

  return (
    <div
      className="contentDropdownLocation"
      style={{ backgroundColor: toggles ? '#F6F6F6' : '' }}
    >
      <div className="dropdownLocation">
        <h2 className="h2">Équipements</h2>
        <img
          className="chevron"
          src={Vector}
          onClick={toggleFunctions}
          style={{ transform: toggles ? 'rotate(0.5turn)' : 'rotate(0)' }}
          alt="chevron"
        />
      </div>
      <div className="contentSommaire">
        <ul
          className="sommaire liste"
          style={{ display: toggles ? 'block' : 'none' }}
        >
          {equipements.map((liste, index) => (
            <li key={index}>{liste}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DropdownEquipements
