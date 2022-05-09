import React, { useEffect, useState } from 'react';
import aboutImg from '../../Images/about-img.png';
import fruitOne from '../../Images/organic-fruits-1.png';
import fruitTwo from '../../Images/organic-fruits-2.png';
import fruitThree from '../../Images/organic-fruits-3.png';
import { ArrowRightIcon } from '@heroicons/react/solid';
import './Home.css';
import Inventory from '../Inventory/Inventory';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const Home = () => {
    const navigate = useNavigate();
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        fetch('https://agile-fortress-99835.herokuapp.com/fruit')
            .then(res => res.json())
            .then(data => {
                setFruits(data)
            });
    }, [])
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
                    <button className='btn'>Explore More <ArrowRightIcon className='btn-right-icon'></ArrowRightIcon> </button>
                </div>
                <div className='about-img'>
                    <img src={aboutImg} alt="" />
                </div>
            </div>
            {/* Home abut section end*/}

            {/* Home fruits info section start*/}
            <div>
                <h1 className='about-header'>Our Organic Fruits</h1>
                <div className='about-fruits'>
                    <div className='organic-fruits-img'>
                        <div className='organic-fruit-left'>
                            <div className='fruit-left-img'>
                                <div className='fruit-img'>
                                    <img src={fruitOne} alt="" width={'200px'} height={'200px'} />
                                </div>
                                <div className='fruit-img'>
                                    <img src={fruitTwo} alt="" width={'200px'} height={'200px'} />
                                </div>
                            </div>
                        </div>
                        <div className='fruit-img organic-fruit-right'>
                            <img src={fruitThree} alt="" width={'200px'} height={'200px'} />
                        </div>
                    </div>
                    <div className='organic-fruits-info'>
                        <h1>We Have Organic Fruits</h1>
                        <p>We have organic fruits. Our fruits are extremely fresh. We collect fruits from field and delivered them as soon as possible. </p>
                        <button className='btn'>Explore More <ArrowRightIcon className='btn-right-icon'></ArrowRightIcon> </button>
                    </div>
                </div>
            </div>
            {/* Home fruits info section end*/}

            {/* Home fruits info section end*/}
            <div className='home-inventory'>
                <h1 className='about-header'>Our Inventory</h1>
                {
                    fruits.length === 0 && <Loading></Loading>
                }
                {
                    <div className="inventory">
                        {
                            fruits.slice(0, 6).map(fruit => <Inventory key={fruit._id} fruit={fruit}></Inventory>)
                        }
                    </div>
                }
                <div className='manage-inv-btn'>
                    <button onClick={() => navigate('/manage-inventory')} className='btn'>Manage Inventories</button>
                </div>
            </div>

            <div className="subscribe">
                <h3 className='subscribe-header'>Subscribe us to get daily stock update</h3>
                <div>
                    <input className='subscribe-input' type="email" name="email" id="" placeholder='Enter your email' />
                    <button className='btn'>Subscribe Us</button>
                </div>
            </div>

        </div>
    );
};

export default Home;