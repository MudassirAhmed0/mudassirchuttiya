import React from 'react'
import HeroImg from '../../assets/images/contactus.jpg'

const AboutHero = () => {
    return (
        <>
            <div className='relative service-hero-height' >
                <img src={HeroImg} alt="Hero img" className='hero-width mob-h-100per' />

            </div>
            <div className='hero-content top-50 w-930px w-full horizontaly-center'>
                <h1 className='w-50 white-color m-auto text-center mb-2r f-45 mob-mb-0 mob-f-36 mob-w-100'>
                    About Us
                </h1>
            </div>


        </>
    )
}

export default AboutHero