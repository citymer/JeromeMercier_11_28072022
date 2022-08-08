import React from 'react'
import Vector from '../assets/Vector.png'
import { useState } from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({ titre, description }) => {
  const [toggle, setToggle] = useState(false)
  const toggleFunction = () => {
    setToggle(!toggle)
  }
  return (
    <div className="centrage">
      <div>
        <div className="contentDropdown">
          <div className="dropdown">
            <h2 className="title">{titre}</h2>
            <img
              className="chevronDown"
              src={Vector}
              onClick={toggleFunction}
              style={{ transform: toggle ? 'rotate(0.5turn)' : 'rotate(0)' }}
              alt="chevron"
            />
          </div>
          <div className="contentSommaire">
            <p
              className="sommaire"
              style={{ display: toggle ? 'block' : 'none' }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  titre: PropTypes.string,
  description: PropTypes.string,
}
export default Dropdown
