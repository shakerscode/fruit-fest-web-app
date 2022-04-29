import React, { useState } from 'react';
import logo from '../../../Images/Fruit Fest Logo.png';
import CustomLink from '../../CustomLink/CustomLink';
import { MenuAlt3Icon } from '@heroicons/react/solid'
import './Navbar.css'

const Navbar = () => {
    const [toggl, setToggl] = useState()
    return (
        <div className='nav-container'>
            <div className='nav-section'>
                <div className='logo-sec'>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <nav className='nav-links'>
                        <CustomLink to="/home">Home</CustomLink>
                        <CustomLink to="/blog">Blog</CustomLink>
                        <CustomLink to="/contact-us">Contact Us</CustomLink>
                        <CustomLink to="/manage-items">Manage Items</CustomLink>
                        <CustomLink to="/add-item">Add Item</CustomLink>
                        <CustomLink to="/my-item">My Items</CustomLink>
                        <CustomLink to="/log-out">Log Out</CustomLink>
                        <CustomLink to="/login">Login</CustomLink>
                    </nav>
                    <div><MenuAlt3Icon className='icon'></MenuAlt3Icon></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;