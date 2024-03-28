import React from 'react';
import logo from "./Images/logo.png"
import "./footer.css";
import { Typewriter } from 'react-simple-typewriter';
import {Link} from "react-router-dom"

export const footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };
  return (
    <>
    <div className='footer-main'>
      <div className='brand'>
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
            {/* <div className='sub'>
                  <h6>SUBSCRIBE TO NEWSLETTER</h6>
                <a href="mailto:info@157Careers.in"><i class="fa-regular fa-envelope"></i>
                  <span>Email</span></a>  
           </div> */}
      </div>
      <div className='company1'>
            
            <ul>
                <h3>Company</h3>
                  <li><Link to="./" onClick={scrollToTop}>Home</Link></li>
                  <li><Link to="./about" onClick={scrollToTop}>About Us</Link></li>
                  <li><Link to="./consultancy" onClick={scrollToTop}>Services</Link></li>
                  <li><Link to="./industriesWeServe" onClick={scrollToTop}>Industries</Link></li>
                  <li><Link to="./maindata" onClick={scrollToTop}>Recruitment</Link></li>
                  <li><Link to="./overview" onClick={scrollToTop}>Know Us</Link></li>
            </ul>
      </div>
      
      <div className='contact'>
            <h3>
                  Contact
            </h3>
            <i class="fa-solid fa-location-dot"></i>
            <span>157 Careers Private Limited 2th Floor,Ace Nest Building, <br />703, Taboot St, Camp,Pune, Maharashtra-411001</span>
            <i class="fa-regular fa-envelope"></i>
            <span>info@157Careers.in</span>
            <i class="fa-solid fa-phone"></i>
            <span>+91 9881545940</span>
            <div className='social'>
                  <h3>FOLLOW US</h3>
                  <a href="https://www.linkedin.com/company/157careers/" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                  <a href="https://www.facebook.com/157careers/" target='_blank'><i class="fa-brands fa-facebook"></i></a>
                  
                 <a href=""> <i class="fa-brands fa-twitter"></i></a>
                  
                 <a href=""><i class="fa-brands fa-instagram"></i></a>
                  <a href="mailto:info@157Careers.in" target='_blank'><i class="fa-solid fa-envelope"></i></a>
            </div>
      </div>
    </div>
    </>
  )
};
export default footer;
