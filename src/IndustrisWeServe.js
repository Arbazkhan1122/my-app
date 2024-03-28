import React from 'react';
import "./IndustrisWeServe.css";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"
import Health from "./Images/healthCare.jpg";
import Banking from "./Images/Banking.jpg";
import Oem from "./Images/Oem.jpg"


export const IndustrisWeServe = () => {
         useEffect(() => {
    AOS.init({duration:2000})
  },[])
  return (
    <>
    <div className='Industries-main-div'>
            <center><h1 className='industries-we-serve-heading'>INDUSTRIES WE SERVE</h1></center>
           
    <div className="industries-we-serve-boxMainDiv" data-aos="zoom-in">
     
        <div className="industries-we-serve-boxMainDiv-subDiv" >
            <img src={Banking} alt="Black and White Image"/>
            <div className="image-name">BFSI-Banking, Financial Services and Insurance</div>
        </div>
        <div className="industries-we-serve-boxMainDiv-subDiv" >
            <img src="https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=1024x1024&w=is&k=20&c=Gsr6lZkBHjjeP5o18w9_mvnWxMZBqB-ncOi6tqh87hM=" alt="Black and White Image"/>
            <div className="image-name">Retails & E Commerse</div>
        </div>
        <div className="industries-we-serve-boxMainDiv-subDiv" >
            <img src={Oem}/>
            <div className="image-name">Original Equipment Manufacturer (OEM)</div>
        </div>
        <div className="industries-we-serve-boxMainDiv-subDiv" >
            <img src={Health} alt="Black and White Image"/>
            <div className="image-name">Health Care</div>
        </div>
        <div className="industries-we-serve-boxMainDiv-subDiv" >
            <img src="https://cdn.pixabay.com/photo/2014/10/14/20/14/library-488690_640.jpg" alt="Black and White Image"/>
            <div className="image-name">Education</div>
        </div>
   
    </div>
    <br/><br/>
    <section className="industries-we-serve-info-section" data-aos="zoom-in">
        <h1 className="industries-we-serve-info-section-heading" data-aos="zoom-in">BFSI-Banking, Financial Services and Insurance</h1>
        <hr className="hrr"/>
        <p className="industries-we-serve-info-section-description" data-aos="zoom-in">
            The realm of cashless payments is experiencing rapid expansion, driven by evolving payment methods, increased e-commerce utilization, improved broadband connectivity, and the integration of new technologies. <br /> In today's dynamic digital landscape, where efficiency and speed are paramount, the majority of customer transactions occur online. <br /> Cashless payment methods, including innovations like mobile wallets, peer-to-peer (P2P) mobile payments, real-time payments, and cryptocurrencies, are swiftly evolving.In this era of digital advancement, 157 Industries leverages profound knowledge and a suite of exceptional products and services tailored specifically for the Banking sector. With the growing adoption of technologies such as Virtual Reality, Artificial Intelligence, and rapid Digitization, a significant number of individuals are embracing contactless payments. <br />157 Industries actively contributes to the digital transformation and online business processes of leading banks and NBFCs in India, including IndusInd Bank Ltd, IDFC First Bank Ltd, Fedbank Financial Services Ltd. Our cost-efficient and effective products and services play a pivotal role in this transformative journey.
        </p>
        <br/><br/>
        <h1 className="industries-we-serve-info-section-heading" data-aos="zoom-in">Retail & E-Commerce</h1>
        <hr className="hrr"/>
        <p className="industries-we-serve-info-section-description" data-aos="zoom-in">
            Online retailing acts as a digital link connecting retailers and consumers, facilitating the sale of products and services through e-commerce platforms. The popularity of online retail and e-commerce among retailers is fueled by advantages like low investment costs, direct access to target customers, and rapid returns on investment. <br /> This retail format enables retailers to efficiently serve customers by offering a diverse range of products and services. <br />157 Industries uses its technological and retail expertise to enhance the customer shopping experience through advanced technology in design, analytics, system integration, product engineering, and artificial intelligence. <br /> We provide innovative e-commerce platforms introducing buyers and sellers to new technology, advanced features, and a user-friendly transaction flow. <br />Moreover, 157 Ventures empowers buyers and sellers to streamline operations with our advanced technologies, improving competitive stances and retail business operations.    
        </p>
        <br/><br/>
        <h1 className="industries-we-serve-info-section-heading" data-aos="zoom-in">OEM</h1>
        <hr className="hrr"/>
        <p className="industries-we-serve-info-section-description" data-aos="zoom-in">
            At 157 Industries, we operate as an Original Equipment Manufacturer (OEM), producing components or products that are acquired by other companies and seamlessly integrated into their final products. The purchasing company, referred to as the 'original equipment manufacturer,' subsequently markets and sells the end product under its own brand name. <br />  Our OEM expertise extends across diverse industries, such as electronics, automotive, and machinery, where we supply specialized components or subsystems that play a crucial role in enhancing the functionality of the final product.
        </p>
        <br/><br/>
        <h1 className="industries-we-serve-info-section-heading" data-aos="zoom-in">Health Care</h1>
        <hr className="hrr"/>
        <p className="industries-we-serve-info-section-description" data-aos="zoom-in">
            157 Industries empowers clients to implement and manage digital healthcare solutions, maintaining comprehensive case management records and guiding them on their journey toward digital transformation. <br />Our healthcare solutions cover the entire healthcare cycle, including doctor's appointment scheduling, self-check-in, remote consultations, data ingestion, medical aid, testing requests, patient enrollment, tab-based centralized patient statistics management, case management, expense management, account settlement, billing, patient discharge, claims management, record auditing, and workflow management. <br />In response to the challenges faced by doctors and patients, and the increasing demand for Virtual Healthcare, 157 Industries introduces SmartConsult, a Digital Healthcare solution. <br />Utilizing technology such as telephones, video, mobile apps, text-based messaging, and other communication platforms, SmartConsult delivers health services to patients outside the traditional healthcare setting. <br />Through SmartConsult, doctors can optimize their time with faster interactions, ensuring the safety of their patients' lives. This practice is especially valuable for treating patients in remote locations, far from local health facilities or areas with a shortage of medical professionals. <br /> SmartConsult effectively bridges the gap between people and healthcare systems globally, enhancing the efficiency of care delivery and reducing expenses associated with transporting patients to hospitals.         
        </p>
        <br/><br/>
        <h1 className="industries-we-serve-info-section-heading" data-aos="zoom-in">Education Management</h1>
        <hr className="hrr"/>
        <p className="industries-we-serve-info-section-description" data-aos="zoom-in">
           E-learning, or virtual education, is the widely used term for applying modern electronic technology to teaching and learning. Initially used for distance learning, it has become a powerful tool for interactive virtual education.Today, web-based learning is a global phenomenon known for its flexibility, particularly beneficial for those with limited financial resources, offering opportunities for higher education and academic completion.Institutions of all sizes are actively moving away from traditional methods, embracing a technology-centric approach to education. This shift aims to simplify educational processes and strengthen connections among students, teachers, parents, and management.
        </p>
    </section>
</div>
    </>
  )
};
export default IndustrisWeServe;
