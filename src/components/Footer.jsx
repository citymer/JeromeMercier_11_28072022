import React from 'react'
import LOGO from '../assets/LOGO.png'

const Footer = () => {
  return (
    <div className="footer">
      <img className="logoKasa" src={LOGO} alt="logo" />
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
