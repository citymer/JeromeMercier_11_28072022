import React from 'react'
import precedent from '../assets/precedent.png'
import suivant from '../assets/suivant.png'

const Carroussel = (logement) => {
  //renvoie le tableau d'images
  const maison = logement.logement
  let photoCourante = 0
  // renvoie 1
  let photoSuivante =
    photoCourante === maison?.length - 1 ? 0 : photoCourante + 1
  // renvoie le nombre total d'images -1
  let photoPrecedente =
    photoCourante === 0 ? maison?.length - 1 : photoCourante - 1

  function nextImg(suivant) {
    const imgAppartement = document.getElementById('appartement')
    //affichage de la position de l'image dans le tableau
    const positionImg = document.getElementById('positionImg')

    if (imgAppartement !== null && positionImg !== null) {
      if (suivant) {
        imgAppartement.setAttribute('src', maison?.[photoSuivante])
        photoCourante = photoSuivante
        photoSuivante =
          photoCourante === maison?.length - 1 ? 0 : photoCourante + 1
        photoPrecedente =
          photoCourante === 0 ? maison?.length - 1 : photoCourante - 1
        positionImg.textContent = photoCourante + 1 + '/' + maison?.length
      } else {
        imgAppartement.setAttribute('src', maison?.[photoPrecedente])
        photoCourante = photoPrecedente
        photoSuivante =
          photoCourante === maison?.length - 1 ? 0 : photoCourante + 1
        photoPrecedente =
          photoCourante === 0 ? maison?.length - 1 : photoCourante - 1
        positionImg.textContent = photoCourante + 1 + '/' + maison?.length
      }
    }
  }

  return (
    <div className="carroussel">
      {maison?.length > 1 ? (
        <button className="precedent" onClick={() => nextImg(false)}>
          <img src={precedent} alt="precedent" />
        </button>
      ) : (
        ''
      )}
      <img
        id="appartement"
        className="appartement"
        src={maison?.[0]}
        alt="appartement"
      />
      {maison?.length > 1 ? (
        <button className="suivant" onClick={() => nextImg(true)}>
          <img src={suivant} alt="suivant" />
        </button>
      ) : (
        ''
      )}
      <p id="positionImg">{photoCourante + 1 + '/' + maison?.length}</p>
    </div>
  )
}

export default Carroussel
