import React from 'react'
import Cards from './Components/Cards/Cards'
import Hero from './Components/Hero/Hero'
import Presentacion from './Components/Presentacion/Presentacion'
import Faq from './Components/Faq/Faq'

const Home = () => {
  return (
    <>
      <Hero />
      <Presentacion />
      <Cards/>
      <Faq />
      <div>index</div>
    </>
    
  )
}

export default Home