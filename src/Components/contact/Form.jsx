import { Link } from 'react-router-dom';
import React from 'react'

const Form = () => {
  return (
    <>
      <div className='w-930px m-auto min-h-100 contact-form'>
        <div className='contact-form-div'>
          <div>
            <h2 className='send-us-contact big-color mob-mt-2'>Send us a Message</h2>
            <div className='line-bar-contact'></div>
            <label htmlFor="" className='big-color font-weight-500'>Select an option</label>
            <input type="text" className='contact-input mb-1r' placeholder='select' />

            <label htmlFor="" className='big-color font-weight-500'>Phone</label>
            <input type="number" className='contact-input mb-1r' placeholder='Type here...' />

            <label htmlFor="" className='big-color font-weight-500'>Email</label>
            <input type="email" className='contact-input mb-1r' placeholder='Type here...' />

            <label htmlFor="" className='big-color font-weight-500'>Your Message</label>
            <input type="text" className='contact-input p-0 mb-1r h-200' placeholder='Type here...' />
          </div>
          <div className='mt-5r mob-mb-2'>
            <div className='flex justify-end align-center'>
              <p className='mr-2r cursour-pointer'>Cancel</p>
              <div className='hero-contact mt-0 hero-detail-contact'>
                <Link to="#" className='white-color text-decoration'>Submit</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1000px"></div>
    </>
  )
}

export default Form