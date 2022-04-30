import React from 'react';
import logo from '../../../Images/Fruit Fest Logo.png';
import { } from '@heroicons/react/solid/package.json'
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
                  
              </div>
          </div>
        </div>
    );
};

export default Footer;