import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h1 className='about-header'>Our Blogs</h1>
            <div className='blog-section'>
                <div className='blog'>
                    <h4>Difference between javascript and nodejs?</h4>
                    <p className='blog-answer'>
                        1. Javascript is a scripting language which is also abbreviated as JS. It is a high-level programming language that write scripts for website. Where Node JS is an interpreter or running environment of Javascript. <br />
                        2. Javascript is used for client side web app and node js is mostly used for server-side. <br />
                        3. Javascript run in any browsers JavaScript Engine like v8, safari and so on. But node js is just run in v8 engine. <br />
                        4. Though we can run js in browser, but with the help of node js, we can run js code outside the browser. <br />
                        5. We can write html in js but can't write in node js. .</p>
                </div>
                <div className='blog'>
                    <h4>When should you use nodejs and when should you use mongodb?</h4>
                    <p className='blog-answer'>Node JS is an interpreter or running environment of Javascript that is easily understood by most of the browsers and it is mostly used in server side. We use it for fetching data from database. When we need to get, post, update and delete data we can easely do it by node js api creating.
                        <br />
                        MongoDB is document based database who's main aim is using a non-structured database like NoSQL. When we need to store our document centric data, we should use MongoDB. It is very flexible and easy to load data. </p>
                </div>
                <div className='blog'>
                    <h4>Differences between sql and nosql databases?</h4>
                    <p className='blog-answer'>1. SQL or Structured Query Language is called as relational databases and NoSQL is opposite of SQL, is called as non relational database.
                        <br />
                        2. SQL database is structured database and NoSQL in non-structerded databse.
                        <br />
                        3. SQL is tabel-based database and NoSQL is documnet based database.
                        <br />
                        4. SQL databases are vertically scalable and NoSQL  are horizontally scalable.</p>
                </div>
                <div className='blog'>
                    <h4>What is the purpose of jwt and how does it work?</h4>
                    <p className='blog-answer'>JWT, or JSON Web Token is something that secure users information. By the help of jwt, we can authorize a user. If the user is unauthorized then we can force the user to go back. Unauthorized user can't able to see data. So for the security purpose, jwt is used.
                        <br />
                        It's worke proccess is not so hard. It just transmit information between two parties like server and client side.  It send a security token to the client side and the client side take to token and store it in localstorage. Then by api calling we can get the token from headers. Then we need to decode it and conditionally  we can check the user if he/she is authorized or not.</p>
                </div>
            </div>
        </div >
    );
};

export default Blog;