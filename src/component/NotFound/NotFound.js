import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFoundIcon from '../../Images/icons/404-icon.png'
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='not-found-page'>
            <h1>Sorry, this page is not available.</h1>
            <img src={notFoundIcon} alt="" width={'60px'}/>
            <p>The page you want to reach is not available. </p>
            <button onClick={()=> navigate('/')} className='btn'>Back to home page</button>
        </div>
    );
};

export default NotFound;