import React, { useState } from 'react';
import './Navbar1.css'; // Import CSS file
import { NavLink,Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import logo from "./Images/logo.png";


const Navbar1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" ,
    });
  };

  return (
    <header className="header">
      <nav className="nav container-nav">
        <div className="nav__data">
          <div className="logo">
              <div>
                <Link to="/">
                <img src={logo} alt="" onClick={scrollToTop}  className="logo" />
                </Link>
              </div>
              
              <div className="nav-brand">
                <Link to="/">
                <h3 onClick={scrollToTop} >
        157{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Careers', 'Industries']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
      </h3>

                <p className="navbar-brand">Symbol Of Uniqueness</p>
                </Link>
              </div>
            </div>

          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i id='nav-toggle-1' className={`ri-menu-line nav__burger ${isMenuOpen ? 'show-icon' : ''}`}></i>
            <i className={`ri-close-line nav__close ${isMenuOpen ? 'show-icon' : ''}`}></i>
          </div>
         
        </div>
         
        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            {/* Dropdown 1 */}
            <li className="dropdown__item">
              <div className="nav__link">
                Known Us <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>

              <ul className="dropdown__menu">
                <li>
                  <NavLink to="./overview" className="dropdown__link">
                    <i className="ri-pie-chart-line"></i> Overview
                  </NavLink>                          
                </li>

                <li>
                  <NavLink to="./myteam" className="dropdown__link">
                    <i className="ri-arrow-up-down-line"></i> Our Team
                  </NavLink>
                </li>
              </ul>
            </li>
             <li><NavLink to="./about" className="nav__link">About Us</NavLink></li>

            {/* Dropdown 2 */}
            <li className="dropdown__item">
              <div className="nav__link">
                Our Ventures <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>

              <ul className="dropdown__menu">
                <li>
                  <NavLink to="./industriesWeServe" className="dropdown__link">
                    <i className="ri-user-line"></i> Industries We Serve
                  </NavLink>                          
                </li>
              </ul>
            </li>
             <li className="dropdown__item">
              <div className="nav__link">
                Services <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>

              <ul className="dropdown__menu">
                <li>
                  <NavLink to="./consultancy" className="dropdown__link">
                    <i className="ri-user-line"></i> Consultancy
                  </NavLink>                          
                </li>
                <li>
                  <NavLink to="outsourcing" className="dropdown__link">
                    <i className="ri-user-line"></i> Outsoursing
                  </NavLink>                          
                </li>
                <li>
                  <NavLink  to="./technology" className="dropdown__link">
                    <i className="ri-user-line"></i> Technology
                  </NavLink>                          
                </li>
              </ul>
            </li>

            <li><NavLink to="./maindata" className="nav__link">Recruitment</NavLink></li>
            <li><NavLink to="./contactus" className="nav__link">Contact us</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar1;
