import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import TrustedBrand from "./TrustedBrand";
import ProductDetails from "./ProductDetails";
import CustomerExperience from "./CustomerExperience";
import Services from "./Services";
import YearsOfTrust from "./YearsOfTrust";
import Footer from "./footer";
import GroupCompanys from "./GroupCompanys";
import IndustrisWeServe from "./IndustrisWeServe";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Consultancy from "./Consultancy";
import Outsourcing from "./Outsourcing";
import Technology from "./Technology";
import Product from "./Product";
import ContactUs from "./ContactUs";
import MyTeam from "./MyTeam";
import MouseHover from "./MouseHover";
import Award from "./Award";
import OverView from "./OverView";
import About1 from "./About1";
import MainData from "./MainData";
import Navbar1 from "./Navbar1";




function App() {



  return (
    <>
     <div className="App">
  
    <BrowserRouter>
    <MouseHover/>
      <Navbar1 />
      
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/groupCompanys' element={<GroupCompanys/>}></Route>
      <Route path='/industriesWeServe' element={<IndustrisWeServe/>}></Route>
      <Route path='/consultancy' element={<Consultancy/>}></Route>
      <Route path='/outsourcing' element={<Outsourcing/>}></Route>
      <Route path='/technology' element={<Technology/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/contactus' element={<ContactUs/>}></Route>
      <Route path='/myteam' element={<MyTeam/>}></Route>
      {/* <Route path='/award' element={<Award/>}></Route> */}
      <Route path='/overview' element={<OverView/>}></Route>
      <Route path='/about' element={<About1/>}></Route>
      <Route path='/maindata' element={<MainData/>}></Route>
    </Routes>
    
    {/* <ContactUs/> */}
    <Footer/>
    
    </BrowserRouter>
    </div>
    
    </>
  );
}

export default App;
