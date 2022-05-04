import React from 'react';
import googleImg from '../../../Images/Social Icon/search.png'
import facebookImg from '../../../Images/Social Icon/facebook.png'
import githubImg from '../../../Images/Social Icon/github.png'
import './SocialLogin.css';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const googleLogin = () =>{
        signInWithGoogle(); 
    }
    if (loading) {
        return toast('Loading....', {id: 'Loading! Please wait.'})
      }
    if (error) {
        return (
          toast.error('Something went wrong!', {id: 'An error occur!'})
        );
      }
      if (user) {
          toast.success('Successfully logged in.',{id:'Successfully logged in.' })
        return navigate('/')
      }
    return (
        <div className='social-login'>
           <p className='or-text'><b>Or sign in with</b></p>
            <div className='social-methods'>
                <div onClick={googleLogin} className="login-methods">
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