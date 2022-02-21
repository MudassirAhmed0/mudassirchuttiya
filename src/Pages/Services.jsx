import React from 'react'
import { useParams } from 'react-router-dom'
import Cta from '../Components/Cta'
import HeroSection from '../Components/detailpages/HeroSectiondetail'
import ServiceDetails from '../Components/detailpages/ServiceDetails'

const Services = () => {
  const {serviceName} = useParams() 
  return (
    <>
      <HeroSection  serviceName={serviceName} />
      <ServiceDetails  serviceName={serviceName}/>
      <Cta />
    </>
  )
}

export default Services