import React from 'react'
import './OverView.css'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"
import aboutUs from "./Images/aboutUs.jpg"

function OverView() {
        useEffect(() => {
    AOS.init({duration:2000})
  },[])
  return (
    <div> 
    <section className="OvermainSection" data-aos="zoom-in">
        <div className="OveraboutMainDiv" data-aos="zoom-in">
            <div className="OverimageDiv" style={{padding:"40px"}} data-aos="zoom-in">
                <img className="Overimagee" src={aboutUs} alt='About Us Image'/>
            </div>
            <div className="OverinfoDiv" data-aos="zoom-in">
                <h1 className="Overabouth1" data-aos="zoom-in">About Us</h1>
                <h1 className="OveraboutHead" data-aos="zoom-in">Dedicated to value, dedicated to you</h1>
                <p className="Overaboutpara" data-aos="zoom-in">157 Industries Business Ventures Pvt Ltd was founded by entrepreneurs Ajinkya Bandamantri and Ashok Murdikar. We are committed to contributing to women's empowerment and creating job opportunities for the differently-abled through technology enablement. With over 6 years of operational experience, IBVL provides consulting, outsourcing, and technology services, covering IT, ITES, back-office/credit processing, BPM, and digital transformation. Holding ISO 9001:2015 and ISO/IEC 27001:2013 certifications, along with MSME and NSIC registrations, we serve leading industries in BFSI, NBFC, healthcare, telecom, retail, hospitality, media & entertainment, and corporates in India and overseas.Our team, with over 6 years of multi-domain industry experience, operates in six metro cities in India - Mumbai, Pune, Chennai, Bangalore, Hyderabad, and Noida - with a human capital of over 650, delivering premium services to our esteemed customers.At 157 Industries, our entrepreneurial, engineering, and research teams collaborate to explore opportunities, challenges, and solutions in artificial intelligence, machine learning, and big data analytics. We offer innovative business transformation solutions and digital BPM services for customer </p>
                
            </div>
        </div>
        
        <div className="OverVMmainDiv" data-aos="zoom-in">
            <div className="OvervmSubDiv" data-aos="zoom-in">
                <div className="OvervmHeadDiv" data-aos="zoom-in">
                    <h1 className="OvervmHead" data-aos="zoom-in">Our Vision</h1>
                </div>
                <div className="OvervmInfoDiv" data-aos="zoom-in">
                    <h3 className="OvervmH" data-aos="zoom-in">Pinnacle of Service Excellence</h3>
                    <p className="OvervmPara" data-aos="zoom-in">We aspire to stand as a globally renowned back office service provider, distinguished for our unwavering commitment to delivering tangible and reliable value to businesses.</p>
                    <h3 className="OvervmH" data-aos="zoom-in">Strategic Partnership Excellence</h3>
                    <p className="OvervmPara" data-aos="zoom-in">Our ambition is to achieve the coveted status of a "Preferred Strategic Solutions Partner" for global Fortune 500 companies, ensuring a sustained delivery of high-quality outputs recognized by leading global research and advisory firms. Our ultimate objective is to secure the foremost position in the outsourcing and business consulting industry.</p>
                </div>
            </div>
            <div className="OvervmSubDiv" data-aos="zoom-in">
                <div className="OvervmHeadDiv" data-aos="zoom-in">
                    <h1 className="OvervmHead" data-aos="zoom-in">Our Mission</h1>
                </div>
                <div className="OvervmInfoDiv" data-aos="zoom-in">
                    <h3 className="OvervmH" data-aos="zoom-in">Global Excellence</h3>
                    <p className="OvervmPara" data-aos="zoom-in">Strive for a worldwide presence by delivering unparalleled IT-enabled services to international companies. We prioritize swift, cost-effective solutions, ensuring unwavering customer satisfaction.</p>
                    <h3 className="OvervmH" data-aos="zoom-in">Innovative Pursuits</h3>
                    <p className="OvervmPara" data-aos="zoom-in">Devote relentless efforts to achieving our goals by cultivating a platform that not only inspires but also supports innovative business solutions.</p>
                </div>
            </div>
        </div>
        <div className="OverreachUSDiv" data-aos="zoom-in">
            <div className="OverreachUsInfoDiv" data-aos="zoom-in">
                <h1 className="OverreachUsInfo" data-aos="zoom-in">We wield dynamic business transformation capabilities and embody a consultative approach grounded in extensive domain expertise.</h1>
            </div>
            <div className="OverreachUsBtnDiv" data-aos="zoom-in">
                <a href="#"><button className="Overbtn">Reach Us  <i className="fa-solid fa-arrow-right"></i></button></a>
            </div>
        </div>
    </section>

    </div>
  )
}

export default OverView