import React, { useEffect } from "react";
import "./TrustedBrand.css";
import img1 from "./Images/img1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const TrustedBrand = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="trusted-brand" data-aos="fade-left">
        <h1 data-aos="zoom-out">Trusted Clients & Partners</h1>
        <center className="text-trust-heading" style={{ backgroundColor: "red", padding: "20px" }}>
          <h3>SORRY!! <br /> HIGHLY CONFIDENTIAL</h3>
        </center>
        <div className="company-img" data-aos="zoom-in">
          {[...Array(4)].map((_, index) => (
            <div className="card trust-card"  key={index}>
              <img src={img1} className="card-img-top" alt="..." />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrustedBrand;
