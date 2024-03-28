// import React from "react";
// import "./Navbar.css";
// import logo from "./Images/logo.png";
// import { IoLogoFacebook } from "react-icons/io5";
// import { FiInstagram } from "react-icons/fi";
// import { FaTelegram } from "react-icons/fa";

// export const Navbar = () => {
//   return (
//     <>
//       <div className="main-nav">
//         <div className="logo">
//           <img src={logo} alt="Logo" />
//           <h3>
//             <span>157</span> Symbol of Uniqueness
//           </h3>
//         </div>
//         <div className="menu-link">
//           <ul>
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#">About</a>
//             </li>
//             <li>
//               <a href="#">Services</a>
//             </li>
//             <li>
//               <a href="#">Contact</a>
//             </li>
//           </ul>
//         </div>
//         <div className="social-media">
//           <ul className="social-media-desktop">
//             <li>
//               <a href="facebook.com" target="_blank" className="fb">
//                 <IoLogoFacebook />
//               </a>
//             </li>
//             <li>
//               <a href="instagram.com" target="_blank" className="ins">
//                 <FiInstagram />
//               </a>
//             </li>
//             <li>
//               <a href="teligram.com" target="_blank" className="tel">
//                 <FaTelegram />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Navbar;

import React from "react";
import "./Navbar.css";
import { Typewriter } from "react-simple-typewriter";
import logo from "./Images/logo.png";
import search from "./Images/magnifying-glass.png";
import { NavLink,Link } from "react-router-dom";


export const Navbar = () => {
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" ,
    });
  };

 


  return (
    <>
      <div className="nav-div" >
        <nav className="navbar navbar-expand-lg  main-nav">
          <div className="container-fluid">
            <div className="logo">
              <div>
                <Link to="/">
                <img src={logo} alt="" onClick={scrollToTop}  className="logo" />
                </Link>
              </div>
              
              <div className="nav-brand">
                <Link to="/">
                <h3 onClick={scrollToTop} >
        157{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Careers', 'Industries']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
      </h3>

                <p className="navbar-brand">Symbol Of Uniqueness</p>
                </Link>
              </div>
            </div>

            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}

            {/* <div
              className="collapse navbar-collapse menu-link nav-sub-menu-links"
              id="navbarSupportedContent"
            > */}
              <ul className="navbar-nav me-auto mb-2 ">
                <li >
                  <a activeClassName="active" className="nav-link" aria-current="page" href="#">
                    KNOW US
                  </a>
                   <ul id="submenu1">
                    <li><NavLink to='/overview'onClick={scrollToTop}>Overview</NavLink></li>
                    <li><NavLink to="/myteam" onClick={scrollToTop}>Our Team</NavLink></li>
                    {/* <li><Link to='/award'>Awards & Recognitions</Link></li> */}
                  </ul>
                </li>
                <li >
                  <NavLink activeClassName="active" to="/about" className="nav-link" onClick={scrollToTop}>
                    ABOUT US
                  </NavLink>
                </li>
                <li >
                  <Link  href="#">
                    OUR VENTUERS
                  </Link>
                  <ul id="submenu">
                    {/* <li><Link to="/groupCompanys" onClick={scrollToTop}>Groups Companies</Link></li> */}
                    <li><NavLink to="/industriesWeServe" onClick={scrollToTop}>Industries We Serve</NavLink></li>
                  </ul>
                </li>

                {/* <li className="nav-item">
                  <Link to="/product" onClick={scrollToTop}>PRODUCTS</Link>
                </li> */}
                <li >
                  <Link  >SERVICES</Link>
                  <ul id="submenu2">
                    <li><NavLink to="/consultancy" onClick={scrollToTop}>Consulting</NavLink></li>
                    <li><NavLink to="/outsourcing" onClick={scrollToTop}>Outsourcing</NavLink></li>
                    <li><NavLink to="/technology" onClick={scrollToTop}>Technology</NavLink></li>
                  </ul>
                </li>
                <li >
                  <NavLink to="/maindata" onClick={scrollToTop}>RECRUITMENT</NavLink>
                </li>
                <li >
                  <NavLink to="/contactus" onClick={scrollToTop}>CONTACT US</NavLink>
                </li>
                <li>
                  <form action="">
              <input type="text" style={{padding:"5px 10px",borderRadius:"20px"}} placeholder="Search here" />
              <button className="btn" style={{padding:"1px 10px"}}>Search</button>
              </form>
                </li>
             </ul>
             
              
             
             
            </div>
          {/* </div> */}
        </nav>
      </div>
    </>
  );
};
export default Navbar;
