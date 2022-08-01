import React from 'react'
import Header from '../components/Header'
import SectionOne from '../components/SectionOne'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <SectionOne />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default Home
