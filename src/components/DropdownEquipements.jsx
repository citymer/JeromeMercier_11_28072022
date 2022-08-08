import React from 'react'
import { useState } from 'react'
import Vector from '../assets/Vector.png'

const DropdownEquipements = () => {
  const [toggles, setToggle] = useState(false)
  const toggleFunctions = () => {
    setToggle(!toggles)
  }
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
        <p className="sommaire" style={{ display: toggles ? 'block' : 'none' }}>
          rr
        </p>
      </div>
    </div>
  )
}

export default DropdownEquipements
