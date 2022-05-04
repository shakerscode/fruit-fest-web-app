import React from 'react';
import googleImg from '../../../Images/Social Icon/search.png'
import facebookImg from '../../../Images/Social Icon/facebook.png'
import githubImg from '../../../Images/Social Icon/github.png'
import './SocialLogin.css';

const SocialLogin = () => {
    return (
        <div className='social-login'>
           <p className='or-text'><b>Or signin with</b></p>
            <div className='social-methods'>
                <div className="login-methods">
                    <div>
                         <img src={googleImg} alt="" width={'40px'}/>
                    </div>
                    <div>
                        <p>Continue with google</p>
                    </div>
                </div>
                <div className="login-methods">
                    <div>
                         <img src={facebookImg} alt="" width={'32px'}/>
                    </div>
                    <div>
                        <p>Continue with facebook</p>
                    </div>
                </div>
                <div className="login-methods">
                    <div>
                         <img src={githubImg} alt="" width={'40px'}/>
                    </div>
                    <div>
                        <p>Continue with github</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;