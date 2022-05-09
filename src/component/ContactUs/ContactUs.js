import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='contact-us'>
            <h1 className='about-header'>Contact Us</h1>
                <div>
                    <input className='about-input' type="name" name="email" id="" placeholder='Enter your name' />
                    <input className='about-input' type="email" name="email" id="" placeholder='Enter your email' />
                    <textarea className='about-input' placeholder="What's on your mind?"></textarea>
                    <button className='btn'>Submit</button>
                </div>
        </div>
    );
};

export default ContactUs;