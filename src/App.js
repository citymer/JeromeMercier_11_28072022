import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Apropos from './pages/Apropos'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
