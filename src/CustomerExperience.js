import React, { useEffect } from "react";
import "./CustomerExperience.css";
import AOS from "aos";
import "aos/dist/aos.css";
import consulting from "./Images/group-12.svg";
import outsourcing from "./Images/group-15.svg";
import Navbar from "./Navbar";

export const CustomerExperience = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="body2" data-aos="fade-down">
        <div className="customer-tagLine" data-aos="zoom-in">
          <h3 style={{color:"black"}}>Global Impact</h3>
          <h1 style={{color:"#FD0000"}}>
            We strongly believe in the impact of customer experience, blending
            innovation into everything we do.
          </h1>
        </div>
        <div className="customer-content" data-aos="zoom-in">
          <div className="consulting container card1" data-aos="zoom-in">
            <h3>Empowering Consultation</h3>
            <img src={consulting} alt="" className="con-img" />
            <p>
              At 157 Industries, we are committed to empowering Indian and
              Overseas organizations through a comprehensive suite of
              consultancy services. Our offerings encompass market research,
              strategic market planning, global business development,
              management consulting, and state-of-the-art technology solutions
              with a focus on automation. Spanning diverse industrial domains,
              including banking, financial services, insurance, telecom, legal,
              retail, logistics, government, food and beverages, travel and
              hospitality, renewable energy, education management, healthcare,
              e-commerce, entertainment, and real estate, 157 Industries excels
              in delivering bespoke and innovative consultancy solutions.
            </p>
          </div>
          <div className="outsourcing container card1" data-aos="zoom-in">
            <h3>Strategic Outsourcing Excellence</h3>
            <img src={outsourcing} alt="" className="image" />
            <p>
              At 157 Industries, we excel in IT services, credit processing,
              BPO, and KPO services. Our commitment is to deliver intelligent,
              next-generation, and comprehensive business solutions, leveraging
              cutting-edge technology. With a dedicated focus on aiding global
              enterprises, we empower them to overcome business challenges and
              achieve their strategic goals."
            </p>
          </div>
          <div className="technology container card1" data-aos="zoom-in">
            <h3>Empowering Technology Transformation</h3>
            <img
              src="https://theimperative.in/images/2021/05/15/group-172.svg"
              alt=""
              className="image1"
            />
            <p>
              At 157 Industries, we guide companies in transforming,
              optimizing, and accelerating their technology needs. We provide
              innovative technology solutions, utilizing an agile methodology
              and open-source platforms for industry-specific solutions,
              development, and support. Our aim is to propel businesses toward
              excellence in their growth journey.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerExperience;
