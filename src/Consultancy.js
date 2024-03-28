import React from 'react';
import './Consultancy.css';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Market from "./Images/Market&Research.jpg"
import mb from "./Images/MarB.jpg"
import heath from "./Images/Health.jpg"
import softwearCon from "./Images/SoftwearCon.jpg"

const Consultancy = () => {
      useEffect(() => {
    AOS.init({duration:2000})
  },[])
  return (
    <div>
    <section style={{width:"100%",maxWidth:"100%"}}>
      <div>
        <div className='ConsulatncymainDiv'data-aos="fade-right">
         <center data-aos="fade-right" ><h1 style={{color:'red',fontSize:"3rem",fontWeight:"bold"}}>CONSULTANCY SERVICES</h1></center>
          <div className='ConsulatncysubDiv'  data-aos="fade-right">
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv'  src={Market} alt="" />
            </div>
            <div className='ConsulatncyparaDiv' data-aos="fade-right" >
              <h2 className='Consulatncyheading2'>Market Research & Analysis</h2>
              <p className='ConsulatncyParagraph1 justify'>
                Market research is essential for shaping your marketing strategy. When done effectively, it illuminates key aspects of your marketing efforts, like understanding your target audience's needs, aiding customer problem-solving, and refining your approach. 157 helps you assess the size of your new addressable market without costly and time-consuming efforts. With a proven track record in researching new markets, our solutions are customized for you."
              </p>
            </div>
          </div>

          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2'>Marketing and Business Development</h2>
              <p className="justify" >
                At 157 Industries, we specialize in delivering Digital Marketing and Commerce services, offering clients result-driven experiences. Our comprehensive approach involves in-depth analysis of current market strategies, trends, and customer data and insights, empowering organizations to confidently achieve new milestones.
              </p>
            </div>
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv'  src={mb} alt="" />
            </div>
          </div>

          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv'  src={heath} alt="" />
            </div>
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2'>Health Care Solutions</h2>
              <p className="justify" >
                At 157 Industries, our AI-driven Healthcare Solutions uplift hospital and clinic operations, introducing automated workflows and paperless processes for enhanced efficiency.Our solutions bridge gaps between patients, nurses, and doctors, streamlining hospital operations for a higher level of service quality. Empowering healthcare professionals to make quick decisions results in faster disease recovery. Our offerings include Telehealthcare, Hospital Management System, and Telemedicine Solutions.
              </p>
            </div>
          </div>

          <div className='ConsulatncysubDiv' data-aos="fade-right" style={{width:"100%",maxWidth:"100%"}}>
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2'>Software Consulting & Sales</h2>
              <p className="justify" >
               In the dynamic landscape of business, software consulting services play a crucial role in evaluating and improving the efficiency of technology-enabled Business Process Management (BPM). Today, businesses across various industries thrive on new technologies, AI-based analytics, streamlined processes, and effective customer relationship management.At 157, we provide industry-specific software consulting solutions crafted to meet the unique business needs of sectors such as BFSI, NBFC, Healthcare, Telecom, Retail, Logistics, Hospitality, Media and Entertainment, and Corporates in India and Overseas.
              </p>
            </div>
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv'   src={softwearCon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Consultancy;