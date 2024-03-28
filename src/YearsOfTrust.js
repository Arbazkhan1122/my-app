import React, { useState, useEffect } from 'react';
import './YearsOfTrust.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export const YearsOfTrust = () => {
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div className='main' data-aos="zoom-in">
          <div className='fack'></div>
          <div className='trust cards3' data-aos="zoom-out">
            <div className='trustedCus ' data-aos="fade-left">
              <div className='heading-tag' data-aos="fade-right">
                <h3>Six years of milestones</h3>
                <h1>Trusted by happy customers and recognized by the industry!</h1>
                <p>"Expressing gratitude to our cherished customers for their unwavering trust and support, crucial in reaching this significant milestone. Eagerly anticipating the attainment of more milestones, we deeply appreciate your continued support."</p>
              </div>
              <div className='customer-details' data-aos="fade-left">
                <div className="card-body borde cards" data-aos="fade-left">
                  <h2>{counterOn && <CountUp start={0} end={10} duration={4} delay={0} />}</h2>
                  <p className="card-text">Years of Experience</p>
                </div>
                <div className="card-body borde cards" data-aos="fade-left">
                  <h2>{counterOn && <CountUp start={0} end={100000} duration={4} delay={0} />}</h2>
                  <p className="card-text">Satisfied Customers</p>
                </div>
                <div className="card-body borde cards" data-aos="fade-left">
                  <h2>{counterOn && <CountUp start={0} end={99} duration={4} delay={0} />}</h2>
                  <p className="card-text">Industry Awards</p>
                </div>
                <div className="card-body borde cards" data-aos="fade-left">
                  <h2>{counterOn && <CountUp start={0} end={100} duration={4} delay={0} />}</h2>
                  <p className="card-text">Projects Completed</p>
                </div>
                <div className="card-body borde cards" data-aos="fade-left">
                  <h2>{counterOn && <CountUp start={0} end={650} duration={4} delay={0} />}</h2>
                  <p className="card-text">Product Varieties</p>
                </div>
                <div className="card-body borde cards" data-aos="fade-left">
                  <h2>{counterOn && <CountUp start={0} end={34000} duration={4} delay={0} />}</h2>
                  <p className="card-text">Happy Clients</p>
                </div>
              </div>
              <div className='button' data-aos="zoom-in">
                <Link to="/contactus"><button className='bb' style={{color:'black'}}>GET IN TOUCH</button></Link>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>

      <div className='connect' data-aos="fade-down">
        <div className='tagLine' data-aos="fade-left">
          <h1>We deliver top-tier, tailor-made products coupled with exceptional customer services of the highest standard</h1>
        </div>
        <div className='button' data-aos="fade-up">
          <Link to="/contactus"><button className='bb'>Let's connect...Let's Begin!!!</button></Link>
        </div>
      </div>
    </>
  );
};

export default YearsOfTrust;
