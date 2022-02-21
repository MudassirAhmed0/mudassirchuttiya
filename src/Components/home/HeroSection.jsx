import React from 'react'
import HeroImg from '../../assets/images/Homepage.jpg'
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <>
            <div className='relative ipad-set mob-h-100vh' >
                <img src={HeroImg} alt="Hero img" className='hero-width hero-img-ipad' />

            </div>
            <div className='hero-content w-930px w-full horizontaly-center min-tab-top-35 mob-top-65'>
                <h1 className='w-50 white-color min-tab-w-100 mod-f-26'>
                    Foster a culture pf innovation and growth allow brands to expand
                </h1>
                <p className='w-50 white-color f-14 pt-2r min-tab-w-100 min-tab-mb-3r'>A Marketing Agency based in West Africa that belive in relationships, transparency and trust. We are a resluts driven marketing agency that delivers powerful results have a projects in mind? Speak with us today about a consultation.</p>

                <div className='hero-contact min-tab-m-auto mob-m-0'>
                    <Link to="#" className='white-color text-decoration '>Contact US</Link>
                </div>
            </div>


        </>
    )
}

export default HeroSection