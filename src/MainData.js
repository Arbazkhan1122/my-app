import React from "react";
import "./MainData.css";
import Angular from "../src/Images/recruitmentImg/Angular.jpg"
import BusinessIntelligence from "../src/Images/157 Photos/business.jpeg"
import BusinessAnalytics from "../src/Images/157 Photos/businessAnalystic.jpeg"
import Pyathon from "../src/Images/recruitmentImg/Python.jpg"
import JavaArch from "../src/Images/157 Photos/javaArchi.jpeg"
import SaleForce from "../src/Images/recruitmentImg/Sales force.jpg"
import JavaDeveloper from "../src/Images/recruitmentImg/JAVA.jpg"
import MainFrame from "../src/Images/recruitmentImg/Main frame.jpg"
import ScrumMaster from "../src/Images/recruitmentImg/Scrum Mater.jpg"
import ScalaDeveloper from "../src/Images/recruitmentImg/Scale developer.jpg"
import NodeJs from "../src/Images/recruitmentImg/NODe.jpg"
import ReactJs from "../src/Images/recruitmentImg/React JS.jpg"
import DataAnalytics from "../src/Images/recruitmentImg/Data Analysis.jpg"
import DataScience from "../src/Images/recruitmentImg/Data Science.jpg"
import SapBusiness from "../src/Images/recruitmentImg/SAP.jpg";
import requ from "./Images/requ.jpg"
 

 
import AOS from  'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const MainData = () => {
    useEffect(() => {
    AOS.init({duration:2000})
  },[])
  return (
    <div>
      <section style={{maxWidth:"100%", width:"100%"}}>
        <div>
          <div>
            <h1 style={{color:"red", fontSize:"3rem",fontWeight:"bold"}} data-aos="fade-left">Recruitment</h1>
            <div>
              <img style={{width:"80%", maxWidth:"100%"}} className="MainImg11"
                src={requ}
                alt=""
                data-aos="fade-left"/>
              <div className="mainIndustries">
                <h1 style={{color:"red", fontSize:"3rem",fontWeight:"bold"}}  data-aos="fade-left" >The Industry Specialist</h1>
                <div className="mainList"  data-aos="fade-right">
                  <ul>
                    <li>Information Technology</li>
                    <li> ITES</li>
                    <li>E Commerce and Retail</li>
                    <li> FMCG</li>
                    <li> Business Consulting</li>
                    <li> Real Estate</li>
                    <li> Financial Services </li>
                    <li> Corporate and Support Functions</li>
                    <li> Education</li>
                    <li>HR</li>
                  </ul>
                </div>
                <div>
                  <p className="mainPara1"  data-aos="fade-left">
                    Our team of exceptionally talented and seasoned recruiters
                    with over 12+ years of experience from different industries,
                    are skilled in identifying top talent around the globe and
                    matching them with our client's needs. We have our own
                    database of distinct resource pool, curetted from all major
                    Industry requirements, mostly built through referrals and
                    successful partnerships with various Job Portals, Social
                    media platforms and other Talent databases.
                  </p>
                </div>
              </div>
              <div className="mainExpertise"  data-aos="fade-right">
                <div>
                  <h2 style={{color:"red", fontSize:"3rem",fontWeight:"bold"}}>Our Expertise in Staffing & Recruitments</h2>
                </div>
                <div>
                  <p style={{fontSize:"25px"}}  data-aos="fade-left">
                    Contract Staffing: Our Contract Staffing service provides
                    you with access to a pool of prescreened, qualified
                    candidates who are available for short-term or long-term
                    assignments. We can help you fill temporary or project-based
                    roles quickly and efficiently, with candidates who have the
                    skills and experience you need to get the job done. Our
                    Contract Staffing solution is flexible and scalable,
                    allowing you to adjust your staffing levels as your business
                    needs change
                  </p>
                </div>
                <div className="mainCardDiv"  data-aos="fade-right">
                  <div className="newRecruitment">
                    <img  src={Angular} alt="" />
                    Angular JD Developer
                  </div>
                  <div className="newRecruitment">
                    <img src={Pyathon} alt="" />
                    Python Developer
                  </div>
                  <div className="newRecruitment">
                    <img src={JavaArch} alt="" />
                    JAVA Architect
                  </div>
                  <div className="newRecruitment">
                    <img src={SaleForce} alt="" />
                    Sales force
                  </div>
                  <div className="newRecruitment">
                    <img src={JavaDeveloper} alt="" />
                    JAVA Developer
                  </div>
                  <div className="newRecruitment">
                    <img src={MainFrame} alt="" />
                    Mainframe
                  </div>
                  <div className="newRecruitment">
                    <img src={ScrumMaster} alt="" />
                    Scrum Master
                  </div>
                  <div className="newRecruitment">
                    <img src={ScalaDeveloper} alt="" />
                    Scala Developer.
                  </div>
                  <div className="newRecruitment">
                    <img src={NodeJs} alt="" />
                     Node JS
                  </div>
                   <div className="newRecruitment">
                    <img src={ReactJs} alt="" />
                    React JS
                  </div>
                  <div className="newRecruitment">
                    <img src={DataAnalytics} alt="" />
                    Data Analytics
                  </div>
                  <div className="newRecruitment">
                    <img src={DataScience} alt="" />
                    Data Science
                  </div>
                  <div className="newRecruitment">
                    <img src={BusinessAnalytics} alt="" />
                    Business Analytics
                  </div>
                  <div className="newRecruitment">
                    <img src={BusinessIntelligence} alt="" />
                    Business Intelligence,
                  </div>
                  
                  <div className="newRecruitment">
                    <img src={SapBusiness} alt="" />
                    SAP Business
                  </div>
                </div>
              </div>
              <div className="mainSourceDiv"  data-aos="fade-left">
                <h1 style={{color:"red", fontSize:"3rem",fontWeight:"bold"}}>Source To Seat…</h1>
                <div className="sourceToSeat1">
                  Screening & Short listing | We proofread and check all CVs and
                  personally interview applicants so that you end up with a
                  shortlist of strong profileioptions
                </div>
                <div className="sourceToSeat2">
                  Final Selection | We will be on hand during the entire
                  interview process, offering advice from interview procedures
                  to contract and salary negotiations
                </div>
                <div className="sourceToSeat3">
                  Follow Up Procedure | The final step is to ensure a happy fit,
                  so six weeks after the appointment, we will be in touch over a
                  call or visit in person
                </div>
              </div>
              <div className="mainGotToseat"  data-aos="fade-right">
                <h1 style={{color:"red", fontSize:"3rem",fontWeight:"bold"}}>Got A Seat To Fill?</h1>
                <div className="gotToSeatParDiv">
                  <p className="gotToSeatPara" style={{fontSize:"25px"}}>
                    Any business owner worth their salt knows that the company
                    workforce is their single most important asset. No Workers =
                    No Company Looking to fill an essential role or find a
                    replacement is known to be one of the most stressful task
                    for employers - especially when time pressure is on and the
                    clock is ticking. Are you wondering how to find the perfect
                    candidate, and fast, without racking up huge expenses? This
                    is where we come in.
                  </p>
                  <br></br>
                  <h4 style={{color:"red", fontSize:"3rem",fontWeight:"bold"}}>157 Careers Got You Covered</h4>
                  <div>
                    <p className="gotToSeatPara" style={{fontSize:"25px"}}>
                      157 Careers is a recruitment consultancy based out of
                      Pune, Maharashtra. Established in June 2018, it's a
                      division of 157 Industries Pvt Ltd.
                      <br></br>
                      We proudly state that our consultancy provides the best
                      quality staff and fulfils all HR related requirements.
                      Though we are a young organization, we have the market
                      expertise and experience required for servicing our
                      client's best interest.
                      <br></br>
                      We provide you with the best candidates across country,
                      using our vast database of both experienced professionals
                      and Fresher's. We are known for our efficient recruitment
                      services to our customers, fulfilling all of their “For &
                      From” recruiting and staffing needs across Pan India
                      locations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mainWhatWe"  data-aos="fade-right">
                <div className="mainWhatWeDiv1"> 
                  <h3 style={{color:"red", fontSize:"3rem",fontWeight:"bold"}}>What we Can also do for you</h3>
                  <div>
                    <ul>
                      <li>Executive Search</li>
                      <li> Leadership Hiring</li>
                      <li>Niche and Lateral Hiring</li>
                      <li>
                        Training and Certifications on various HR functions
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mainWhatWeDiv1">
                  <h3 style={{color:"red", fontSize:"3rem",fontWeight:"bold"}}>Our Sourcing Partners</h3>
                  <div>
                    <ul>
                      <li>Subscribers base</li>
                      <li>Job Portals</li>
                      <li>LinkedIn Search</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainData;