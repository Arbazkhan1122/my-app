import React from "react";
import "./MyTeam.css";
import Manjhusha from './Images/Senior.jpg'
import Nishaa from './Images/NishaMam1.jpg'
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

function MyTeam() {
    useEffect(() => {
    AOS.init({duration:2000})
  },[])
  return (
    <div>
      
      <section style={{padding:"0",width:"100%",maxWidth:"100%"}}>
          <div className="newTeamDiv1" data-aos="zoom-in">
            <div className="newTeamHeading1" data-aos="zoom-in">
              <h1 data-aos="zoom-in">Leadership Team</h1>
            </div>
            <div  data-aos="zoom-in" className="newteamManDiv">
              <div className="newTeamSubDiv" data-aos="zoom-in">
                <img
                  className="newTeamImage"
                  src={Nishaa}
                  alt=""
                />
                <div className="newTeamheadingdiv" data-aos="zoom-in">
                  <h2 style={{fontSize:"3rem"}} data-aos="zoom-in">Nisha Singh</h2>
                  <h3 style={{fontSize:"1.5rem"}} data-aos="zoom-in">HR professional & Operations Lead</h3>
                  <br />
                </div>
                <div className="infoAboutDirectors" data-aos="zoom-in">
                    <p>
                    As a HR professional and Operations Lead with a technical background, I bring a unique blend of analytical skills and people-centric approach to talent management. With five years of experience in talent acquisition, 
                    I've honed the ability to identify and attract top-tier candidates across diverse industries. My technical acumen enables me to understand the specific skill sets required for various roles, facilitating efficient recruitment processes.
                    I thrive in fast-paced environments, leveraging both my technical expertise and HR insights to streamline hiring procedures and foster a culture of innovation. Committed to continuous learning, I stay updated on industry trends 
                    to ensure effective talent acquisition strategies that drive organizational success
                    </p>
                </div>
              </div>
              <div className="newTeamSubDiv" data-aos="zoom-in">
                <img
                  className="newTeamImage"
                  src={Manjhusha}
                  alt=""
                />
                <div className="newTeamheadingdiv" data-aos="zoom-in">
                  <h2 style={{fontSize:"3rem"}} data-aos="zoom-in">Mr.Sarang Balankhe</h2>
                  <h3 style={{fontSize:"1.5rem"}} data-aos="zoom-in">Results-oriented Senior Management leade</h3>
                  <br />
                </div>
                <p className="infoAboutDirectors" data-aos="zoom-in">
                Results-oriented Senior Management leader proven success over 30 years in Telecom Industry (Both at Corporate and Circle level).
                    Highly proven track record of working with business heads for cohesive working for seamless Technology Function Delivery.
                    Good exposure of international Market as a part of telecom evolution in India in terms of coordination with major international 
                    vendors and telecom operator.Proficiencies in Project Management, 
                    System Implementation, Team Building and Team Development.
                </p>
              </div>
            </div>
          </div>    
          <div className="newTeamDiv1" data-aos="zoom-in">
            

            <div className="newteamManDiv" data-aos="zoom-in">
              <div className="newTeamSubDiv" data-aos="zoom-in">
                <img
                  className="newTeamImage"
                  src="https://cdn.pixabay.com/photo/2020/09/21/05/57/coffee-5589036_640.jpg"
                  alt=""
                />
                <div className="newTeamheadingdiv">
                  <h1 data-aos="zoom-in">Mr.Mohmmad Ubaid</h1>
                  <h3 data-aos="zoom-in">IT Project Manager</h3>
                  <br />
                </div>
                <p className="infoAboutDirectors" data-aos="zoom-in">
                  Experienced IT project manager with six years in the industry, adept at leading cross-functional teams and delivering successful projects. Proven track record in IT professional roles, demonstrating strong project management skills and a results-driven approach.
                </p>
              </div>
             
            </div>
          </div>
      
   </section>
    </div>
  );
}

export default MyTeam;