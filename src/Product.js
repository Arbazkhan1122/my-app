import React from 'react';
import './Product.css';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"

function Product() {
       useEffect(() => {
    AOS.init({duration:2000})
  },[])
  return (
      <>
      <center className='product-Heading'><h1>Products</h1></center>
    <div className='product-cards'>
<div className='card11'>
   <img src="https://www.157ipl.com/wp-content/uploads/2023/08/cropped-157careers.png" alt="" />
</div>
<div className='card11'>
   <img src="https://www.157ipl.com/wp-content/uploads/2023/08/cropped-157careers.png" alt="" />
</div>
<div className='card11'>
   <img src="https://www.157ipl.com/wp-content/uploads/2023/08/cropped-157careers.png" alt="" />
</div>
<div className='card11'>
   <img src="https://www.157ipl.com/wp-content/uploads/2023/08/cropped-157careers.png" alt="" />
</div>
<div className='card11'>
   <img src="https://www.157ipl.com/wp-content/uploads/2023/08/cropped-157careers.png" alt="" />
</div>
<div className='card11'>
   <img src="https://www.157ipl.com/wp-content/uploads/2023/08/cropped-157careers.png" alt="" />
</div>
<div className='card11'>
   <img src="https://www.157ipl.com/wp-content/uploads/2023/08/cropped-157careers.png" alt="" />
</div>
<div className='card11'>
   <img src="https://www.157ipl.com/wp-content/uploads/2023/08/cropped-157careers.png" alt="" />
</div>
    </div>
     
  
    <div>
    <div className='sub-div' data-aos="zoom-out">
      <div className='card12'>
           <img src="https://www.157ipl.com/wp-content/uploads/2023/08/cropped-157careers.png" alt="" /> 
      </div>
      
      <div className='sub-para'>
            <h1>FinBO</h1>
       <h5>Customized offline phygital customer acquisition form processing platform</h5>     
     <p>
      FinBO is a complete customer onboarding process platform that is a desktop-based application built by in-house IT professionals with various banking norms algorithms. Application forms are processed based on digital images received from clients through SFTP as well as physical applications through courier. The platform is compatible with both digital and physical documents, which are scanned and processed
     </p>
     <button className='btn1 btn-primary'>Discover More</button>
      </div>
    </div>  
    <div className='sub-div' data-aos="zoom-out">
      
      
    <div className='sub-para'>
            <h1>FinBO</h1>
       <h5>Customized offline phygital customer acquisition form processing platform</h5>     
     <p>
      FinBO is a complete customer onboarding process platform that is a desktop-based application built by in-house IT professionals with various banking norms algorithms. Application forms are processed based on digital images received from clients through SFTP as well as physical applications through courier. The platform is compatible with both digital and physical documents, which are scanned and processed
     </p>
     <button className='btn1 btn-primary'>Discover More</button>
      </div>
      <div className='card12'>
           <img src="https://www.157ipl.com/wp-content/uploads/2023/08/cropped-157careers.png" alt="" /> 
      </div>
      </div>  
      <div className='sub-div' data-aos="zoom-out">
      <div className='card12'>
           <img src="https://www.157ipl.com/wp-content/uploads/2023/08/cropped-157careers.png" alt="" /> 
      </div>
      
      <div className='sub-para'>
            <h1>FinBO</h1>
       <h5>Customized offline phygital customer acquisition form processing platform</h5>     
     <p>
      FinBO is a complete customer onboarding process platform that is a desktop-based application built by in-house IT professionals with various banking norms algorithms. Application forms are processed based on digital images received from clients through SFTP as well as physical applications through courier. The platform is compatible with both digital and physical documents, which are scanned and processed
     </p>
     <button className='btn1 btn-primary'>Discover More</button>
      </div>
      </div>  
      <div className='sub-div' data-aos="zoom-out">
      
      
      <div className='sub-para'>
            <h1>FinBO</h1>
       <h5>Customized offline phygital customer acquisition form processing platform</h5>     
     <p>
      FinBO is a complete customer onboarding process platform that is a desktop-based application built by in-house IT professionals with various banking norms algorithms. Application forms are processed based on digital images received from clients through SFTP as well as physical applications through courier. The platform is compatible with both digital and physical documents, which are scanned and processed
     </p>
     <button className='btn1 btn-primary'>Discover More</button>
      </div>
      <div className='card12'>
           <img src="https://www.157ipl.com/wp-content/uploads/2023/08/cropped-157careers.png" alt="" /> 
      </div>
      </div>  
      <div className='sub-div' data-aos="zoom-out">
      <div className='card12'>
           <img src="https://www.157ipl.com/wp-content/uploads/2023/08/cropped-157careers.png" alt="" /> 
      </div>
      
      <div className='sub-para'>
            <h1>FinBO</h1>
       <h5>Customized offline phygital customer acquisition form processing platform</h5>     
     <p>
      FinBO is a complete customer onboarding process platform that is a desktop-based application built by in-house IT professionals with various banking norms algorithms. Application forms are processed based on digital images received from clients through SFTP as well as physical applications through courier. The platform is compatible with both digital and physical documents, which are scanned and processed
     </p>
     <button className='btn1 btn-primary'>Discover More</button>
      </div>
      </div>  
</div>
    </>
  );
  
}

export default Product;