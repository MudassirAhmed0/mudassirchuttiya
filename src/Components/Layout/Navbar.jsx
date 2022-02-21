import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import Logo from '../../assets/images/logo.png'



const Navbar = () => {

  const pathname = window.location.pathname
  // const [click, setClick] = React.useState(false);

  // const handleClick = () => setClick(!click);
  // const Close = () => setClick(false);

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
                  <div className={`mega-menu flex p-1r ${pathname !== '/' && 'left-25'}`}>
                    <div className='inner-mega'>
                      <ul className='mega-content '>
                        <li><Link to={'/services/online-advertising'} className='text-decoration big-color font-weight-500'>Online Advertising</Link></li>
                        <li><Link to={'/services/smm'} className='text-decoration big-color font-weight-500'>SMM</Link></li>
                        <li><Link to={'/services/email-marketing'} className='text-decoration big-color font-weight-500'>Email Marketing</Link></li>
                      </ul>
                      <ul className='mega-content'>
                        <li><Link to={'/services/video-production'} className='text-decoration big-color font-weight-500'>Video Production</Link></li>
                        <li><Link to={'/services/sms-marketing'} className='text-decoration big-color font-weight-500'>SMS Marketing</Link></li>
                        <li><Link to={'services/brand-marketing'} className='text-decoration big-color font-weight-500'>Brand Marketing</Link></li>
                      </ul>
                      <ul className='mega-content'>
                        <li><Link to={'/services/graphic-design'} className='text-decoration big-color font-weight-500'>Graphic Design</Link></li>
                        <li><Link to={'/services/marketing-strategy'} className='text-decoration big-color font-weight-500'>Marketing Strategy</Link></li>
                        <li><Link to={'services/web-development'} className='text-decoration big-color font-weight-500'>Website Development</Link></li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </li>
              <li className='pr-2r font-16px'>
                <Link to="#" className='text-decoration text-upper white-color'>About Us</Link>
              </li>
              <li className='pr-2r font-16px'>
                <Link to="#" className='text-decoration text-upper white-color'>Why Us?</Link>
              </li>
              <li className='pr-2r font-16px'>
                <Link to="#" className='text-decoration text-upper white-color mr-1r'>Expertize</Link>
              </li>
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

      {/* <div>
        <div className={click ? "main-container" : ""} onClick={() => Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              CodeBucks
              <i className="fa fa-code"></i>
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/blog"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </ div> */}

      
    </>
  )
}

export default Navbar