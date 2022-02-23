import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown, FaBars } from "react-icons/fa";
import Logo from '../../assets/images/logo.png'
import onlineAdvertising from '../../assets/images/detail-icon-both/onlineadvertising-blue.svg'
import socialmediamarketingandmanagement from '../../assets/images/detail-icon-both/socialmediamarketingandmanagement-blue.svg'
import emailmarketing from '../../assets/images/detail-icon-both/emailmarketing-blue.svg'
import videoproduction from '../../assets/images/detail-icon-both/videoproduction-blue.svg'
import smsmarketing from '../../assets/images/detail-icon-both/smsmarketing-blue.svg'
import graphicdesign from '../../assets/images/detail-icon-both/graphicdesign-blue.svg'
import marketingstrategy from '../../assets/images/detail-icon-both/marketingstrategy-blue.svg'
import websitedevelopment from '../../assets/images/detail-icon-both/websitedevelopment-blue.svg'
import brandMarketing from '../../assets/images/detail-icon-both/brandmarketing-blue.svg'
 



const Navbar = () => { 
  const {pathname} = useLocation()
  const [toggleMenu, setToggleMenu] = useState(false) 
//   },[window.location])
  
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)

  }

  return (
    <>
      <div className='absolute top-menu min-tab-none horizontaly-center w-930px z-1 ipad-pr-3r ipad-pl-3r'>
        <div className='flex pt-2r space-between align-center'>
          <div>
            <Link to={'/'}>

              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div>
            <ul className='flex align-center'>
              <li className='pr-2r font-16px'>
                <Link to="#" className='text-decoration text-upper white-color mega-hover'>What We Do <FaChevronDown className='relative top-3px' />
                  <div className={`mega-menu flex p-1r`}>
                    <div className='inner-mega'>
                      <ul className='mega-content '>
                        <div className='mega-card'>
                       <Link to={'/services/online-advertising'}>
                          <div className='mega-card-inner'>
                            <div className='mega-card-img-div'>
                              <img src={onlineAdvertising} alt="" className='mega-card-img'/>
                            </div>
                            <Link to={'/services/online-advertising'} className="mega-card-text">Online Advertising</Link>
                          </div>
                       </Link>
                        </div>
                        <div className='mega-card'>
                       <Link to={'/services/smm'}>
                          <div className='mega-card-inner'>
                            <div className='mega-card-img-div'>
                              <img src={socialmediamarketingandmanagement} alt="" className='mega-card-img'/>
                            </div>
                            <Link to={'/services/smm'} className="mega-card-text">SMM</Link>
                          </div>
                       </Link>
                        </div>
                        <div className='mega-card'>
                       <Link to={'/services/email-marketing'}>
                          <div className='mega-card-inner'>
                            <div className='mega-card-img-div'>
                              <img src={emailmarketing} alt="" className='mega-card-img'/>
                            </div>
                            <Link to={'/services/email-marketing'} className="mega-card-text">Email Marketing</Link>
                          </div>
                       </Link>
                        </div>
                        <div className='mega-card'>
                       <Link to={'/services/video-production'}>
                          <div className='mega-card-inner'>
                            <div className='mega-card-img-div'>
                              <img src={videoproduction} alt="" className='mega-card-img'/>
                            </div>
                            <Link to={'/services/video-production'} className="mega-card-text">Video Production</Link>
                          </div>
                       </Link>
                        </div>
                        <div className='mega-card'>
                       <Link to={'/services/sms-marketing'}>
                          <div className='mega-card-inner'>
                            <div className='mega-card-img-div'>
                              <img src={smsmarketing} alt="" className='mega-card-img'/>
                            </div>
                            <Link to={'/services/sms-marketing'} className="mega-card-text">SMS Marketing</Link>
                          </div>
                       </Link>
                        </div>
                        <div className='mega-card'>
                       <Link to={'services/brand-marketing'}>
                          <div className='mega-card-inner'>
                            <div className='mega-card-img-div'>
                              <img src={brandMarketing} alt="" className='mega-card-img'/>
                            </div>
                            <Link to={'services/brand-marketing'} className="mega-card-text">Brand Marketing</Link>
                          </div>
                       </Link>
                        </div>
                        <div className='mega-card'>
                       <Link to={'/services/graphic-design'}>
                          <div className='mega-card-inner'>
                            <div className='mega-card-img-div'>
                              <img src={graphicdesign} alt="" className='mega-card-img'/>
                            </div>
                            <Link to={'/services/graphic-design'} className="mega-card-text">Graphic Design</Link>
                          </div>
                       </Link>
                        </div>
                        <div className='mega-card'>
                       <Link to={'/services/marketing-strategy'}>
                          <div className='mega-card-inner'>
                            <div className='mega-card-img-div'>
                              <img src={marketingstrategy} alt="" className='mega-card-img'/>
                            </div>
                            <Link to={'/services/marketing-strategy'} className="mega-card-text">Marketing Strategy</Link>
                          </div>
                       </Link>
                        </div>
                        <div className='mega-card'>
                       <Link to={'services/web-development'}>
                          <div className='mega-card-inner'>
                            <div className='mega-card-img-div'>
                              <img src={websitedevelopment} alt="" className='mega-card-img'/>
                            </div>
                            <Link to={'services/web-development'}  className="mega-card-text">Website Development</Link>
                          </div>
                       </Link>
                        </div> 
                      </ul>
                    </div>
                  </div>
                </Link>
              </li>
              <li className='pr-2r font-16px'>
                <Link to="/about-us" className='text-decoration text-upper white-color'>About Us</Link>
              </li>
              {/* <li className='pr-2r font-16px'>
                <Link to="#" className='text-decoration text-upper white-color'>Why Us?</Link>
              </li>
              <li className='pr-2r font-16px'>
                <Link to="#" className='text-decoration text-upper white-color mr-1r'>Expertize</Link>
              </li> */}
              {pathname === '/' &&
                <li className='contact-us'>
                  <Link to={"/contact-us"} className='text-decoration text-upper white-color white-color'>Contact Us</Link>
                </li>}

            </ul>

          </div>
          {/* <div>
            <Link to="#" className='text-decoration text-upper'>Contact Us</Link>
          </div> */}
        </div>
      </div>


      <nav className="">
        <img src={Logo} alt="menu logo" className='nav-menu-img' />
        {(toggleMenu && (
          <ul className="list">
            <Link to="/" onClick={toggleNav} className='items'>
              <li>Home</li>
            </Link>
            <Link to="" onClick={toggleNav} className='items'>
              <li>What We DO</li>
            </Link>
            <Link to="/about-us"  onClick={toggleNav}className='items'>
              <li>About Us</li>
            </Link>
            <Link to="/contact-us" onClick={toggleNav} className='items'>
              <li>Contact Us</li>
            </Link>
          </ul>
        ))}

        <button onClick={toggleNav} className="btn "><FaBars className='humburger' /></button>

      </nav>
    </>
  )
}

export default Navbar