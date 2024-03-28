import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './ContactUs.css';
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

function ContactUs() {
    useEffect(() => {
    AOS.init({duration:2000})
  },[])
  return (
    <div>
      <section className="contact-form"  data-aos="fade-up">
      <h1 className="sectionHeader" data-aos="fade-down" >contact us</h1>
      <hr />
      <h1 className="heading1" data-aos="fade-up">Get In Touch 157 Family</h1>
      <p className="para1" data-aos="fade-left">
        At 157 Industries, we understand the pivotal role that recruitment plays in shaping the success of businesses and the careers of individuals. Our dedicated team is committed to providing unparalleled recruitment services tailored to your unique needs. Whether you're a company seeking top talent or a job seeker looking for your next opportunity, we're here to help. With our extensive industry expertise and personalized approach, we strive to exceed your expectations and deliver exceptional results. Contact us today to embark on a rewarding partnership and let us assist you in achieving your recruitment goals.
      </p>

      <div className="contactForm" data-aos="fade-up">
        <form action="#">
          <h1 className="sub-heading" data-aos="fade-up">Need Support !</h1>
          <p className="para1 para2" data-aos="fade-down">
            Contact us for a quote, help to join the them.
          </p>
          <input type="text" className="input" placeholder="your name" />
          <input type="text" className="input" placeholder="your email" />
          <input type="text" className="input" placeholder="your Subject" />
          <textarea
            className="input"
            cols="30"
            rows="5"
            placeholder="Your message..."
          ></textarea>
          <input  type="submit" className="input submit" value="Send Message" />
        </form>

        <div className="map-container">
          <div className="mapBg"></div>
          <div className="map" data-aos="fade-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3100476738905!2d73.87541907496276!3d18.514886082577547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1292df6839f%3A0x8baef2d0b86869fd!2s157%20careers!5e0!3m2!1sen!2sin!4v1709458985449!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <br />

      {/* <div className="contactMethod">
        <div className="method">
          <FontAwesomeIcon icon={faLocationDot} className="contactIcon" />
          <article className="text">
            <h1 className="sub-heading">Location</h1>
            <p className="para3">
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Earum
              praesentium optio ipsum suscipit vitae fugit!
            </p>
          </article>
        </div>

        <div className="method">
          <FontAwesomeIcon icon={faEnvelope} className="contactIcon" />
          <article className="text">
            <h1 className="sub-heading">Email</h1>
            <p className="para1">Email : Abcd@gmail.com</p>
          </article>
        </div>

        <div className="method">
          <FontAwesomeIcon icon={faPhone} className="contactIcon" />
          <article className="text">
            <h1 className="sub-heading">Phone</h1>
            <p className="para1">0987654321</p>
          </article>
        </div>
      </div> */}
      {/* <div className='contact2'>
            
            <i class="fa-solid fa-location-dot"></i>
            <span>157 Careers Private Limited 2th Floor,<br/>Ace Nest Building, <br />703, Taboot St, Camp,Pune, Maharashtra-411001</span>
            <i class="fa-regular fa-envelope"></i>
            <span>info@157Careers.in</span>
            <i class="fa-solid fa-phone"></i>
            <span>+91 9881545940</span>
           
      </div> */}
    </section>


    </div>
  )
}

export default ContactUs