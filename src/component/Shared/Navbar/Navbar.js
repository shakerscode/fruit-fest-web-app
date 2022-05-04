import React, { useState } from 'react';
import logo from '../../../Images/Fruit Fest Logo.png';
import CustomLink from '../../CustomLink/CustomLink';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid'
import './Navbar.css'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [user] = useAuthState(auth);
    return (
        <div className='nav-container'>
            <div className='nav-section'>
                <div className='logo-sec'>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <nav className={toggle ? 'nav-links-mobile' : 'nav-links'}>
                        <CustomLink to="/home">Home</CustomLink>
                        <CustomLink to="/manage-inventory">Manage Items</CustomLink>
                        <CustomLink to="/add-item">Add Item</CustomLink>
                        <CustomLink to="/my-item">My Items</CustomLink>
                        <CustomLink to="/blog">Blog</CustomLink>
                        <CustomLink to="/contact-us">Contact Us</CustomLink>
                        {
                            user ?
                                <>
                                <CustomLink onClick={() => {
                                    signOut(auth)
                                    toast.success('Logout successful', {id: 'successful.'})
                                }} to="/login">Log Out</CustomLink>
                                <p>{user.displayName}</p>
                                </>
                                :
                                <CustomLink to="/login">Login</CustomLink>
                        }
                    </nav>
                    <div onClick={() => setToggle(!toggle)}>
                        {
                            toggle ? <XIcon className='icon'></XIcon>
                                :
                                <MenuAlt3Icon className='icon'></MenuAlt3Icon>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;