import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import DropdownLogement from '../components/DropdownLogement'
import PresentationLocation from '../components/PresentationLocation'
import Carroussel from '../components/Carroussel'

const FicheLogement = () => {
  return (
    <div>
      <Header />
      <Carroussel />
      <PresentationLocation />
      <DropdownLogement />
      <Footer />
    </div>
  )
}

export default FicheLogement
