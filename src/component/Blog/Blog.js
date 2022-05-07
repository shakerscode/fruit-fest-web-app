import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h1 className='about-header'>Our Blogs</h1>
            <div className='blog-section'>
                <div className='blog'>
                    <h4>Difference between javascript and nodejs?</h4>
                    <p className='blog-answer'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, consequuntur.</p>
                </div>
                <div className='blog'>
                    <h4>When should you use nodejs and when should you use mongodb?</h4>
                    <p className='blog-answer'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, consequuntur.</p>
                </div>
                <div className='blog'>
                    <h4>Differences between sql and nosql databases?</h4>
                    <p className='blog-answer'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, consequuntur.</p>
                </div>
                <div className='blog'>
                    <h4>What is the purpose of jwt and how does it work?</h4>
                    <p className='blog-answer'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, consequuntur.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;