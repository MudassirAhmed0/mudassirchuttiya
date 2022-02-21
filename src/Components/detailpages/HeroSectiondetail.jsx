import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom';
import { serviceData } from '../../assets/data/data'


const HeroSection = ({ serviceName }) => { 

        const [service, setService] = useState([])
        useEffect(() => {
            const newItem = serviceData.items.filter(item => item.serviceName == serviceName)
    
            setService(...newItem)
        }, [])
        console.log(service, "service");
    return (
        <>
            <div className='relative service-hero-height' >
                <img src={service?.info?.heroimg} alt="Hero img" className='hero-width mob-h-100per min-tab-h-100per' />

            </div>
            <div className='hero-content top-50 w-930px w-full horizontaly-center mob-top-35'>
                <h1 className='w-50 white-color m-auto text-center mb-2r f-45 mob-w-100 '>
                    {service?.info?.heading}
                </h1>
                <div className='hero-contact m-auto hero-detail-contact'>
                    <Link to={'/contact-us'} className='white-color text-decoration'>Contact US</Link>
                </div>
            </div>


        </>
    )
}

export default HeroSection