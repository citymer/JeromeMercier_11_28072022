import React from 'react'
import Dropdown from '../components/Dropdown'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SectionTwo from '../components/SectionTwo'

const Apropos = () => {
  const textDropdown = [
    {
      titre: 'Fiabilité',
      description:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      titre: 'Respect',
      description:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      titre: 'Service',
      description:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hesitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      titre: 'Securité',
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu au locataire,cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]
  return (
    <div>
      <Header />
      <SectionTwo />
      {textDropdown.map((type, index) => (
        <Dropdown
          key={`${type.titre}-${index}`}
          titre={type.titre}
          description={type.description}
        />
      ))}
      <Footer />
    </div>
  )
}

export default Apropos
