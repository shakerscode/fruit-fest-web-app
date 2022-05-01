import React from 'react';
import aboutImg from '../../Images/about-img.png'
import './Home.css';

const Home = () => {
    return (
        <div className='home-section'>
            <div className="banner">
            </div>
            <h1 className='about-header'>About Us</h1>
            <div className='about-section'>
                <div className='about-info'>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cupiditate necessitatibus mollitia distinctio iusto deserunt quasi ducimus consequuntur dolores fugiat.
                    </p>
                    <button>Explore </button>
                </div>
                <div className='about-img'>
                    <img src={aboutImg} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Home;