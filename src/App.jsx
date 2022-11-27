import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './styles/index.scss'
import Apropos from './pages/Apropos'
import Erreur404 from './pages/Erreur404'
import FicheLogement from './pages/FicheLogement'
import Home from './pages/Home'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/fiche-logement/:idLogement" element={<FicheLogement />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
    </HashRouter>
  )
}

export default App
