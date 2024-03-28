import React from 'react';
import './OverView.css';
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';
import weHire from "./Images/weHire.jpg"

function OverView() {
     useEffect(() => {
    AOS.init({duration:2000})
  },[])
  return (
    <div> 
    <section className="OvermainSection" data-aos="zoom-in">
        <div className="OveraboutMainDiv" data-aos="zoom-in"> 
            <div className="OverinfoDiv" data-aos="zoom-out">
                
                <div className="OverimageDiv" data-aos="zoom-in">
                <img className="Overimagee" src={weHire} alt='About Us Image'/>
            </div>
            <hr />
                <h1 className="OveraboutHead" data-aos="zoom-in">Why 157?</h1>
                <hr />
                <p className="Overaboutpara" data-aos="zoom-in">From the inception of introducing - innovative end user products, we were hooked on having a unique name to associate our products with. Instead of jumping on the bandwagon of entirely lifting of an eminent brandName, a clichéd adjective or an alpha numeric blend, we opted to go all numeric 157 - which    we believe is simple,, easy to resonate with any individual from every age group and will be devoid of any race, religion, region and language biases.157 in itself is a “Symbol of Uniqueness” which also is the tagline of our company. Also 157 gives us the edge to conducively market and promote our products on global platform. </p> 
                <hr />
                <h1 className="OveraboutHead" data-aos="zoom-in">Our story </h1>
                <hr />
                <p className="Overaboutpara" data-aos="zoom-in">When we thought of starting an innovating product sale company we thought, rather considering any already popular name/word or any dictionary word or synonymous and giving name to our company decided to choose random number and will give new meaning to it. As “Symbol of uniqueness” it's our slogan. So we are promoting our company name (number), logo as symbol of uniqueness. So the company name is NUMBER “157” which cannot be classified by any region, religion, language which will give us vast scope of publicity worldwide.</p>
                <hr />
                
                <hr />
                <h1 className="OveraboutHead" data-aos="zoom-in">What is the Logo is about?</h1>
                <hr />
                <p className="Overaboutpara" data-aos="zoom-in">Its abstract design </p>  
                <hr /> 
                 <h1 className="OveraboutHead" data-aos="zoom-in">What is the vision of 157?</h1>
                 <hr />
                <p className="Overaboutpara" data-aos="zoom-in">Vision of our organization is to increase the satisfaction level of our customers.</p>
                <hr />
                <h1 className="OveraboutHead" data-aos="zoom-in">What is the mission of 157?</h1>
                <hr />
                <p className="Overaboutpara" data-aos="zoom-in">To become paradigm of the industry</p>   
                <hr />
                
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
                    <p className="OvervmPara">Devote relentless efforts to achieving our goals by cultivating a platform that not only inspires but also supports innovative business solutions.</p>
                </div>
            </div>
        </div>
        <div className="OverreachUSDiv">
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