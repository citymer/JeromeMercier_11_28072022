import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import SectionOne from '../components/SectionOne'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'

const Home = () => {
  const [error, setError] = useState(false)
  const [locationList, setLocationList] = useState([])
  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await fetch('./data/locationList.json')
        const { locationList } = await response.json()
        setLocationList(locationList)
      } catch (err) {
        console.log('----- Error -----', err)
        setError(true)
      }
    }
    fetchLocations()
  }, [])
  if (error) {
    return <span> Oups, il y a eu un problème </span>
  }
  return (
    <div>
      <Header />
      <main>
        <SectionOne />
        <div className="galerie">
          {locationList.map((location) => (
            <Gallery
              key={location.id}
              id={location.id}
              titre={location.title}
              image={location.cover}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
