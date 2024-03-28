import React, { useEffect } from "react";
import "./ProductDetails.css";
import img1 from "./Images/img1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import ats from "./Images/ats.jpg";
import hrms from "./Images/hrms.jpg";
import box from "./Images/box.jpg"

export const ProductDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="body1" data-aos="fade-up">
        <div className="main-content" data-aos="fade-down">
          <div className="customer-tagLine card3" data-aos="fade-left">
            <div className="pcard">
              <h3 style={{ color: "black" }}>Our Products</h3>
              <h1   style={{ color: "red" }}>
                We provide a unique and exceptional experience, not just a
                product.
              </h1>
            </div>
          </div>
          <div className="para card3" data-aos="fade-left">
            <div className="pcard">
              <p>
                At 157 Industries, we're dedicated to innovation and creating
                superior products. Our visionaries go beyond business – they're
                committed to shaping the future. They not only foresee your
                organization's aspirations but also carefully plan the steps to
                move it forward. Achieving lasting success requires a mix of
                discipline and creativity, and we bring the passion,
                determination, and wisdom needed for sustained growth.
              </p>
            </div>
          </div>
        </div>
        <div className="productDetails" data-aos="zoom-out">
          <div className="card borde cards" data-aos="fade-down">
            <img style={{height:"120px"}} src={hrms} className="card-img-top img" alt="..." />
            <div className="card-body">
              <h3>HRMS</h3>
              <p className="card-text" style={{padding:"0"}}>             
               A Human Resource Management System (HRMS) is a centralized software platform that automates HR tasks, including recruitment, payroll, and performance management, to optimize workforce efficiency.
              </p>
            </div>
          </div>
           <div className="card borde cards" data-aos="fade-down">
            <img src={ats} style={{height:"130px"}} className="card-img-top img" alt="..." />
            <div className="card-body">
              <h3>ATS</h3>
              <p className="card-text">     
               Applicant Tracking System (ATS) is software that automates recruitment processes, including job posting, candidate screening, and applicant tracking, streamlining hiring workflows.
              </p>
            </div>
          </div>
           <div className="card borde cards" data-aos="fade-down">
            <img src={box} style={{height:"130px"}} className="card-img-top img" alt="..." />
            <div className="card-body">
              <h3>BMS</h3>
              <p className="card-text">
                Box Management System (BMS) is a software solution for organizing and tracking inventory within boxes, optimizing storage space and streamlining logistics operations.
              </p>
            </div>
          </div>
          {/* Add more product cards here */}
        </div>
        <div className="view-product" data-aos="fade-down">
          {/* <Link to="/product">
            <button className="btn btn-primary">View All Products</button>
          </Link> */}
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
