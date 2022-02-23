import React from 'react'
import { Link } from 'react-router-dom';
import footerLogo from '../../assets/images/logo-blue.png'
import { FaYoutube, FaTwitter, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='why-background pt-5r pb-5r ipad-pr-3r ipad-pl-3r mob-pr-1 mob-pl-1'>
        <div className='w-930px m-auto '>
          <div>
            <Link to={'/'}>

              <img src={footerLogo} alt="Logo" />
            </Link>
            <p className='mt-1r f-14 p-color'>We are a full services marketing agency in Ghana that puts you first. From digital marketing, brand development, website design, social media management and content marketing, to design your next powerful marketing campaign, we work to understand your consumers, your makets and what you need, We help you navigate any complex challenges and make it all easy to understand.</p>
          </div>
          <div className='mt-5r'>
            <div>
              <div className='f-20 big-color font-weight-500'>What we do</div>
            </div>
            <div className='flex space-between mt-1r'>
              <div className='w-36 mob-w-48'>
                <ul className=' flex direction-column row-gap-1'>
                  <li><Link to={'/services/smm'} className='text-decoration p-color'>SMM</Link></li>
                  <li><Link to={'/services/marketing-strategy'} className='text-decoration p-color'>Marketing Strategy</Link></li>
                  <li><Link to={'services/web-development'} className='text-decoration p-color'>Website Development</Link></li>
                </ul>
              </div>
              <div className='w-16 mob-w-48'>
                <ul className=' flex direction-column row-gap-1'>
                  <li><Link to={'/services/video-production'} className='text-decoration p-color'>Video Production</Link></li>
                  <li><Link to={'/services/online-advertising'} className='text-decoration p-color'>Online Advertising</Link></li>
                  <li><Link to={'/services/graphic-design'} className='text-decoration p-color'>Graphic Design</Link></li>
                </ul>
              </div>
              <div className='w-16 mob-w-48 mob-mt-1-2'>
                <ul className=' flex direction-column row-gap-1'>
                  <li><Link to={'services/brand-marketing'} className='text-decoration p-color'>Brand Marketing</Link></li>
                  <li><Link to={'/services/email-marketing'} className='text-decoration p-color'>Email Marketing</Link></li>
                  <li><Link to={'/services/sms-marketing'} className='text-decoration p-color'>SMS Marketing</Link></li>
                </ul>
              </div>
              <div className='w-16 mob-w-48 mob-mt-1-2 flex direction-column row-gap-1'>
                <h5 className='font-weight-500 f-15 big-color font-weight-500'>Follow Us</h5>
                <div className='flex space-between  col-gap-1r min-tab-col-gap-0'>
                  <Link to="#">
                    <FaYoutube className='p-color f-20' />
                  </Link>
                  <Link to="#">
                    <FaTwitter className='p-color f-20' />
                  </Link>
                  <Link to="#">
                    <FaInstagram className='p-color f-20' />
                  </Link>
                  <Link to="#">
                    <FaFacebookSquare className='p-color f-20' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer