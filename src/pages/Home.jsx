import React from 'react'
import Header from '../components/Header'
import SectionOne from '../components/SectionOne'
import Footer from '../components/Footer'
import useFetch from '../UseFetch'
import Gallery from '../components/Gallery'

const Home = () => {
  const { data, error } = useFetch('./data/locationList.json')
  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      <Header />
      <main>
        <SectionOne />
        <div className="galerie">
          {data.map((location) => (
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
