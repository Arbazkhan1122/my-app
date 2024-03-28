import React, { useEffect } from 'react';
import './Services.css';
import retail from './Images/retail.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Health from "./Images/healthCare.jpg";
import Banking from "./Images/Banking.jpg";
import Oem from "./Images/Oem.jpg"

export const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="body1" data-aos="fade-up">
        <div className="main-content" data-aos="fade-down">
          <div className="customer-tagLine card3" data-aos="fade-left">
            <div className="pcard">
              <h3 style={{color:'black'}}>Industries We Serve</h3>
              <h1 style={{color:'red'}}>
                We're committed to delivering top-notch excellence and service
                at the highest standards.
              </h1>
            </div>
          </div>
          <div className="para card3" data-aos="fade-left">
            <div className="pcard">
              <p>We're updating our approach with technology and expertise to improve what we offer.</p>
            </div>
          </div>
        </div>
        <div className="productDetails1 " data-aos="zoom-out">
          
            <div className="card borde cards1" data-aos="fade-down">
              <img src={Health} className="card-img-top img" alt="..." />
              
            </div>
             <div className="card borde cards1" data-aos="fade-down">
              <img src={Banking} className="card-img-top img" alt="..." />
              
            </div>
             <div className="card borde cards1" data-aos="fade-down">
              <img src={Oem} className="card-img-top img" alt="..." />
              
            </div>
             <div className="card borde cards1" data-aos="fade-down">
              <img 
              src={retail}className="card-img-top img" alt="..." />
             
            </div>
             <div className="card borde cards1" data-aos="fade-down">
              <img  src="https://cdn.pixabay.com/photo/2014/10/14/20/14/library-488690_640.jpg" alt="Black and White Image" className="card-img-top img" alt="..." />
             
            </div>
         
        </div>
        <div className="text1" data-aos="fade-down">
          <p>"Upgrade your business by ditching old technology. Choose our modern products and services to move ahead"</p>
        </div>
      </div>
    </>
  );
};

export default Services;
