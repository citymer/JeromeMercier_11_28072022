import React from 'react'
import Vector from '../assets/Vector.png'
import { useState } from 'react'

const Dropdown = () => {
  const [toggle, setToggle] = useState(false)
  const toggleFunction = () => {
    setToggle(!toggle)
  }
  return (
    <div className="centrage">
      <div>
        <div className="contentDropdown">
          <div className="dropdown">
            <h2>Fiabilité</h2>
            <img
              className="chevronDown"
              src={Vector}
              onClick={toggleFunction}
              style={{ transform: toggle ? 'rotate(0.5turn)' : 'rotate(0)' }}
              alt="chevron down"
            />
          </div>
          <p
            className="sommaire"
            style={{ display: toggle ? 'block' : 'none' }}
          >
            ererererer
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
