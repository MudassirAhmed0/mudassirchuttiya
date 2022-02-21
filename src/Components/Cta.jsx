import React from 'react'
import { Link } from 'react-router-dom';


const Cta = () => {
    return (
        <>
            <div className='cta-background ipad-h-600px mob-h-100vh'>
                <div className='w-930px m-auto relative '>
                    <div className='flex space-around cta-content  '>
                        <div className='col-48 flex align-center min-tab-w-80 mob-w-85'>
                            <h2 className='cta-heading'>Do you have a project that you would like to discuss? Get in contact with us! <span className='min-tab-none'></span></h2>

                        </div>
                        <div className='col-36 min-tab-cta-contact flex flex-column justify-center min-tab-mr-4 '>
                            <div>
                                <input type="text" placeholder='Enter your email' />
                            </div>
                            <div className='mt-2r'>
                                <input type="text" placeholder='Your message...' />
                            </div>
                            <div className='cta-btn'>
                                <Link to="#" className='cta-send'>
                                    Send
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cta