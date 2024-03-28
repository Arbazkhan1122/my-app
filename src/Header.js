import React, { useEffect } from "react";
import video1 from "./Images/video8.mp4";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";
import logo from "./Images/logo.png";

export const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);

  return (
    <>
      {/* <div className="main-box" data-aos="fade-up">
        <div className="logo-content">
          <div className="logoTyping logo">
            <center>
              <img src={logo} alt="" />
            </center>
            <h3>157</h3>
          </div>
          <div>
            <h3>
              <span style={{ color: 'red', fontWeight: 'bold' }}>
                <Typewriter
                  words={['SYMBOL OF  UNIQUENESS']}
                  loop={Infinity}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>
          </div> */}
           {/* <div className="logo1">
              <div>
                <img src={logo} alt="" className="logo" />
              </div>
              <div className="nav-brand">
              <h3 >157 </h3>
          <p className="navbar-brand">Symbol Of Uniqueness</p>
              </div>
            </div> */}

        {/* </div> */}
        {/* <div className="name">
        <h3 className="text">157
        <p >Symbol Of Uniqueness</p>
        </h3>
        </div> */}
      {/* </div>
      </div> */}
         {/* <div className="logo1">
              <div>
              
                <img src={logo} alt=""  className="logo1" />
             
              </div>
              
              <div className="nav-brand">
                
                <h3  style={{fontWeight: 'bold' }}>
        157{' '}
        
      </h3>
<span style={{ color: 'red', fontWeight: 'bold' }}> */}
          {/* Style will be inherited from the parent element */}
          {/* <Typewriter
            words={['Symbol Of Uniqueness']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
                
              </div>
            </div> */}
           <div className="main-box">
            <div className="container-header">
              <h1>Welcome To</h1>
              <h3>The World Of 157</h3>
            </div>
            </div>
    </>
  );
};

export default Header;
