import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import DropdownDescription from '../components/DropdownDescription'
import DropdownEquipements from '../components/DropdownEquipements'
import useFetch from '../data/UseFetch'
import Carroussel from '../components/Carroussel'
import { useParams } from 'react-router-dom'
import PresentationLocation from '../components/PresentationLocation'
import Erreur404 from './Erreur404'

const FicheLogement = () => {
  const { data, error } = useFetch('/data/locationList.json')
  let { idLogement } = useParams()

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }
  const logement = data.find((location) => location.id === idLogement)
  if (data.length > 0 && logement !== undefined) {
    return (
      <div>
        <Header />
        <Carroussel logement={logement.pictures} />
        <PresentationLocation logement={logement} />
        <div className="centrage">
          <div className="blocDropdowns">
            <DropdownDescription logement={logement.description} />
            <DropdownEquipements logement={logement.equipments} />
          </div>
        </div>
        <Footer />
      </div>
    )
  } else {
    return <Erreur404 />
  }
}

export default FicheLogement
