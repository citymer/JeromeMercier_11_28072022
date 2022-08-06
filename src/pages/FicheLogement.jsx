import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import DropdownLogement from '../components/DropdownLogement'
import PresentationLocation from '../components/PresentationLocation'
import useFetch from '../UseFetch'

const FicheLogement = () => {
  const { locationList } = useFetch('./data/locationList.json')

  return (
    <div>
      <Header />
      <PresentationLocation />

      <DropdownLogement />
      <Footer />
    </div>
  )
}

export default FicheLogement
