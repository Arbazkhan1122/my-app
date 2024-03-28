import React from 'react';
import './Outsourcing.css';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import digital from "./Images/digital.jpg";
import customerOnBoarding from "./Images/onBoarding.jpg";
import voice from "./Images/voice.jpg";
import recruitment from "./Images/recruitment.jpg";
import bpo from "./Images/bpo.jpg";
import dataMan from "./Images/dataMan.jpg"

const Consultancy = () => {
      useEffect(() => {
    AOS.init({duration:2000})
  },[])
  return (
    <div>
    <section style={{width:"100%",maxWidth:"100%"}}>
      <div>
        <div className='ConsulatncymainDiv' data-aos="fade-right">
         <center data-aos="fade-right"><h1 className='industries-we-serve-heading'>OUTSOURCING SERVICES</h1></center>
          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv' style={{width:"45%",maxWidth:"100%"}} src={digital} alt="" />
            </div>
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2'>Digitization & Document Management</h2>
              <p className="justify" >
               157 Document Management System provides online access for storing, managing, and tracking electronic documents. Multiple users at the client's end can access the same document from anywhere. Imperative takes a proactive approach to mitigate losses from natural calamities or disasters by converting documents into digital formats such as PDF, TIFF, PNG, JPEG, etc. Digitization simplifies the documentation process, making it easier to store, search, access, retrieve, and send documents as needed.
              </p>
            </div>
          </div>

          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2'>Customer Onboarding Forms Processing</h2>
              <p className="justify" >
                157 offers automated customer onboarding form processing, enabling banks to streamline the onboarding process for new customers and ensuring efficiency and accuracy in the Know Your Customer (KYC) process. We conduct thorough customer identification checks to uncover historical company records and sanctions against a customer. Through Imperative's web applications, banks can monitor their customers and receive notifications of any changes to their financial or ownership information, ensuring awareness of potential new risks
              </p>
            </div>
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv' style={{width:"45%",maxWidth:"100%"}} src={ customerOnBoarding} alt="" />
            </div>
          </div>

          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv' style={{width:"45%",maxWidth:"100%"}} src={voice} alt="" />
            </div>
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2'>Voice-Based Processes</h2>
              <p className="justify" >
                157 Industries has developed a comprehensive range of both inbound and outbound services and solutions to address our clients' business needs and drive successful outcomes.

Voice-Based Processes involve handling calls from customers or prospects seeking information about a product or service or clarification of queries.

Recognizing the importance of this, at Imperative, we have crafted effective solutions tailored to our clients' business needs.
              </p>
            </div>
          </div>

          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2'>Recruitment Process Outsourcing (RPO)</h2>
              <p className="justify" >
              Recruitment Process Outsourcing (RPO) is a form of business process outsourcing where an employer delegates some or all of its recruitment tasks to an external service provider, aiming to achieve benefits in terms of cost, quality, efficiency, service, and scalability.

157's RPO process is designed to enhance hiring efficiency and retention while ensuring consistency and compliance in the recruitment and selection stages. It encompasses five key stages: planning, strategy development, searching, screening, and evaluating. This comprehensive approach is tailored to attract a diverse and talented pool of applicants.
              </p>
            </div>
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv' style={{width:"600px",maxWidth:"100%"}} src={recruitment} alt="" />
            </div>
          </div>

          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv' style={{width:"45%",maxWidth:"100%"}} src={bpo} alt="" />
            </div>
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2' data-aos="fade-right">BPO / KPO Services</h2>
              <p className="justify" >
                157 delivers cost-effective BPO/KPO services across diverse sectors, including banking, finance, insurance, retail, communication, healthcare, media & entertainment, travel & hospitality, education, and more. We support organizations by providing high-quality BPO/KPO services infused with advanced analytical and technical skills.
              </p>
            </div>
          </div>

          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2' data-aos="fade-right">Data Management</h2>
              <p className="justify" >
                157 provides comprehensive data management services, securely storing data following client guidelines. Regular data management and audits are conducted based on client preferences. Data analysis is visually presented using graphs and charts with different categories, enhancing clarity on trends. This visual approach surpasses traditional tables, aiding informed decision-making.
              </p>
            </div>
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv' style={{width:"45%",maxWidth:"100%"}} src={dataMan} alt="" />
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default Consultancy;