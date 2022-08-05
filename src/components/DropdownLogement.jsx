import React from 'react'
import DropdownDescription from './DropdownDescription'
import DropdownEquipements from './DropdownEquipements'

const DropdownLogement = () => {
  return (
    <div className="centrage">
      <div className="blocDropdowns">
        <DropdownDescription />
        <DropdownEquipements />
      </div>
    </div>
  )
}

export default DropdownLogement
