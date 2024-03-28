import React from 'react';
import './Technology.css';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import ActiveDirectory from "./Images/ActiveDirectary.jpg";
import Network from "./Images/Network.jpg";
import VPN from "./Images/vpn.jpg";
import azure from "./Images/azure.jpg";
import dataRecovry from "./Images/dataRecovry.jpg";
import dataSecurity from "./Images/dataSecurty.jpg";
import cumsofdev from "./Images/softwearDev.jpg";
import android from "./Images/android.jpg";
import AzureAws from "./Images/AzureAws.jpg";
import game from './Images/game.jpg';
import microSoft from "./Images/microsoft.jpg"

const Consultancy = () => {
      useEffect(() => {
    AOS.init({duration:2000})
  },[])
  return (
    <div>
    <section style={{width:"100%", maxWidth:"100%"}}>
      <div>
        <div className='ConsulatncymainDiv' data-aos="fade-right">
         <center data-aos="fade-right"><h1 className='industries-we-serve-heading'>TECHNOLOGY SERVICES</h1></center>
          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv' style={{width:"100%", maxWidth:"100%"}} src={ActiveDirectory} alt="" />
            </div>
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2'>Active directory database</h2>
              <p className='justify' style={{width:"100%", maxWidth:"100%"}}>
                At 157 Industries, we specialize in providing comprehensive IT solutions, ranging from app development to web development and everything in between. Our expertise extends to managing Active Directory databases, ensuring seamless user authentication, authorization, and access management within your organization's network infrastructure. With our proficiency in database management, we ensure the security, reliability, and efficiency of your Active Directory environment, empowering your business to operate smoothly and securely in today's digital landscape.
              </p>
            </div>
          </div>

          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2'>Network security</h2>
              <p className='justify' style={{width:"100%", maxWidth:"100%"}}>
                Network security is a critical aspect of modern business operations, and at 157 Industries, we prioritize safeguarding your digital assets against cyber threats. Our network security solutions encompass a range of strategies and technologies aimed at protecting your organization's data, infrastructure, and communications from unauthorized access, data breaches, malware, and other cyber attacks.Through comprehensive risk assessments, we identify vulnerabilities in your network and implement robust security measures tailored to your specific needs. Our services include deploying firewalls, intrusion detection and prevention systems, encryption protocols, secure access controls, and regular security audits to ensure ongoing protection.By partnering with 157 Industries, you can trust that your network is fortified with cutting-edge security solutions, allowing you to focus on your core business objectives with peace of mind.
              </p>
            </div>
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv' style={{width:"100%", maxWidth:"100%"}} src={Network} alt="" />
            </div>
          </div>

          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv' style={{width:"700px", maxWidth:"100%"}} src={microSoft} alt="" />
            </div>
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2'>Microsoft Office 365 provides centralized management</h2>
              <p className='justify' style={{width:"100%", maxWidth:"100%"}}>
                157 Industries specializes in developing cutting-edge software solutions and digital services tailored to the needs of modern businesses. With a focus on innovation and efficiency, we excel in creating custom software applications and web development projects. Leveraging our expertise in Microsoft Office 365, we offer centralized management solutions that streamline administrative tasks and enhance productivity. Our team combines technical prowess with a commitment to client satisfaction, delivering solutions that drive growth and success. From app development to network security, we provide comprehensive IT services to meet diverse business needs. Trust 157 Industries to empower your business with innovative solutions and reliable support.
              </p>
            </div>
          </div>

          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2'>VPN connectivity</h2>
              <p className='justify' style={{width:"100%", maxWidth:"100%"}}>
                157 Industries is dedicated to crafting robust solutions in the realm of IT infrastructure, including VPN connectivity. We specialize in designing secure and reliable virtual private network solutions tailored to meet the unique needs of our clients. With a focus on scalability and efficiency, we implement VPN connectivity to facilitate seamless remote access to corporate networks and resources. Our team ensures robust encryption protocols and stringent security measures to safeguard sensitive data during transmission. Trust 157 Industries to deploy VPN solutions that enable remote workforces to collaborate effectively while maintaining the highest standards of security and privacy.
              </p>
            </div>
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv' style={{width:"500px", maxWidth:"100%"}} src={VPN} alt="" />
            </div>
          </div>

          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv' style={{width:"100%", maxWidth:"100%"}} src={azure} alt="" />
            </div>
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2' data-aos="fade-right">Azure Cloud services</h2>
              <p className='justify' style={{width:"100%", maxWidth:"100%"}}>
               157 Industries specializes in leveraging Azure Cloud services to empower businesses with scalable, flexible, and innovative solutions. From cloud migration to infrastructure management, we tailor Azure services to streamline operations, enhance productivity, and drive growth. Our expert team harnesses the power of Azure's comprehensive suite of tools and services to optimize performance, ensure data security, and enable seamless digital transformation. Trust 157 Industries to architect, deploy, and manage Azure solutions that propel your business forward in the digital era.
              </p>
            </div>
          </div>

          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2' data-aos="fade-right">Data Recovery</h2>
              <p className='justify' style={{width:"100%", maxWidth:"100%"}}>
               At 157 Industries, we offer reliable and efficient data recovery solutions tailored to meet the unique needs of our clients. Whether it's recovering data from damaged hard drives, lost files due to accidental deletion, or data corruption issues, our expert team utilizes advanced techniques and cutting-edge tools to retrieve critical data swiftly and securely. With a focus on minimizing downtime and maximizing data integrity, we ensure that businesses can quickly resume operations without compromising on data security or quality. Trust 157 Industries for comprehensive data recovery services designed to safeguard your valuable information and keep your business running smoothly.
              </p>
            </div>
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv' style={{width:"100%", maxWidth:"100%"}} src={dataRecovry} alt="" />
            </div>
          </div>
          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2' data-aos="fade-right">Data Security</h2>
              <p className='justify' style={{width:"100%", maxWidth:"100%"}}>
               At 157 Industries, we prioritize data security as the cornerstone of our services. With a steadfast commitment to protecting sensitive information, we implement cutting-edge encryption techniques, stringent access controls, and regular security audits. Our proactive approach ensures the confidentiality, integrity, and availability of data, safeguarding against cyber threats and unauthorized access. Trust us to provide robust data security solutions tailored to your unique needs, allowing you to focus on your business with peace of mind.
              </p>
            </div>
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv' style={{width:"100%", maxWidth:"100%"}} src={dataSecurity} alt="" />
            </div>
          </div>
          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2' data-aos="fade-right">Custom Software Development</h2>
              <p className='justify' style={{width:"100%", maxWidth:"100%"}}>
               At 157 Industries, we specialize in custom software development tailored to meet your specific business needs. With a focus on innovation and efficiency, we design and build bespoke software solutions that empower your organization to thrive in today's dynamic market. Our team of skilled developers collaborates closely with clients to understand their requirements and deliver scalable, reliable, and user-friendly applications. From concept to deployment, we are committed to delivering high-quality software that drives growth and enhances productivity for your business.
              </p>
            </div>
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv' style={{width:"100%", maxWidth:"100%"}} src={cumsofdev} alt="" />
            </div>
          </div>
          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2' data-aos="fade-right">Android App Development</h2>
              <p className='justify' style={{width:"100%", maxWidth:"100%"}}>
               At 157 Industries, we excel in Android app development, crafting intuitive and feature-rich applications that resonate with your target audience. Leveraging cutting-edge technologies and industry best practices, we transform your ideas into engaging mobile experiences. Our team of skilled developers ensures seamless integration of functionality and aesthetics, delivering high-performance apps that drive user engagement and business growth. Whether you need a simple utility app or a complex enterprise solution, we are dedicated to delivering innovative Android applications that exceed your expectations and elevate your brand presence in the digital landscape.
              </p>
            </div>
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv' style={{width:"1000px", maxWidth:"100%"}} src={android} alt="" />
            </div>
          </div>
          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2' data-aos="fade-right">AZURE, AWS, GCP</h2>
              <p className='justify' style={{width:"100%", maxWidth:"100%"}}>
               At 157 Industries, we specialize in cloud solutions leveraging the power of Azure, AWS, and GCP. With expertise in all three major cloud platforms, we offer comprehensive cloud services tailored to meet your specific business needs. Whether it's migrating your infrastructure to the cloud, optimizing existing cloud environments, or developing cloud-native applications, we provide end-to-end solutions to drive efficiency, scalability, and innovation for your business. Our team of cloud architects and engineers ensures seamless integration, robust security, and optimal performance across multi-cloud and hybrid environments. Partner with us to harness the full potential of Azure, AWS, and GCP, and propel your business towards success in the digital era.
              </p>
            </div>
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv' style={{width:"700px", maxWidth:"100%"}} src={AzureAws} alt="" />
            </div>
          </div>
          <div className='ConsulatncysubDiv' data-aos="fade-right">
            <div className='ConsulatncyparaDiv' data-aos="fade-right">
              <h2 className='Consulatncyheading2' data-aos="fade-right" >Game Development</h2>
              <p className='justify' style={{width:"100%", maxWidth:"100%"}}>
              At 157 Industries, we're passionate about creating immersive gaming experiences that captivate players and push the boundaries of creativity. With our team of skilled game developers and designers, we bring ideas to life, from concept to launch. Whether it's mobile, console, or PC games, we leverage the latest technologies and industry best practices to deliver high-quality, engaging games that resonate with audiences worldwide. From action-packed adventures to mind-bending puzzles, we tailor our game development services to meet your vision and exceed expectations. Partner with us to unleash the power of gaming and bring your ideas to the digital world with 157 Industries.
              </p>
            </div>
            <div className='ConsulatncyimgSection' data-aos="fade-right">
              <img className='ConsulatncyimgDiv' style={{width:"100%", maxWidth:"100%"}} src={game} alt="" />
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default Consultancy;