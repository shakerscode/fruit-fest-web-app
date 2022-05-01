import React from 'react';
import aboutImg from '../../Images/about-img.png';
import {ArrowRightIcon} from '@heroicons/react/solid';
import './Home.css';

const Home = () => {
    return (
        <div className='home-section'>
               {/* Home Banner   */}
            <div className="banner">
            </div>

            {/* Home abut section start*/}

            <h1 className='about-header'>About Us</h1>
            <div className='about-section'>
                <div className='about-info'>
                    <h1>Who we are?</h1>
                    <p>Hello there, <br />
                    Welcome to the best fruits stock manager website around the world. We have a huge collection of organic fruits. The fruits are very healthy and pure. They are organic. We believe in freshness and very much strict with the quality. We will ensure the best fruits for you.
                    </p>
                    <button>Explore <ArrowRightIcon className='btn-right-icon'></ArrowRightIcon> </button>
                </div>
                <div className='about-img'>
                    <img src={aboutImg} alt="" />
                </div>
            </div>
             {/* Home abut section end*/}

        </div>
    );
};

export default Home;