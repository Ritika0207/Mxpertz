import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Brands from './components/Brands'
import Shop from './components/Shop'
import Stock from './components/Stock'
import Footwear from './components/Footwear'
import ImageSection from './components/ImageSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Brands/>
      <Shop/>
      <Stock/>
      <Footwear/>
      <ImageSection/>
      <Footer/>
    </>
  )
}

export default App