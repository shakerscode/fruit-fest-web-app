import React from 'react';
import logo from '../../../Images/Fruit Fest Logo.png';
import facebook from '../../../Images/icons/facebook.png';
import twitter from '../../../Images/icons/twitter.png';
import instagram from '../../../Images/icons/instagram.png';
import './Footer.css' 

const Footer = () => {
    return (
        <div className='footer-section'>
          <div className='footer-info'>
          <div className='footer-img'>
           <img src={logo} alt="" />
           </div>
           <div className='footer-text'>
               <p>Contact Us</p>
               <p>FAQs</p>
               <p>Help</p>
               <p>Support</p>
           </div>
          </div>
          <div className='footer-bottom'>
              <div className='footer-credit'>
                  <p>
                      Copyright &copy; {new Date().getFullYear()} All right reserved by Shaker Ahamed
                  </p>
              </div>
              <div className='footer-social'>
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                  <img src={instagram} alt="" />
              </div>
          </div>
        </div>
    );
};

export default Footer;