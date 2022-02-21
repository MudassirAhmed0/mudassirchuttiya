import React from 'react'
import Cta from '../Components/Cta'
import HeroSection from '../Components/home/HeroSection'
import Services from '../Components/home/Services'
import WhyUs from '../Components/home/WhyUs'

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <WhyUs />
      <Cta />
    </>
  )
}

export default Home