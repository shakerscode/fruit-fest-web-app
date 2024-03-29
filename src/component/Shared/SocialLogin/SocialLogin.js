import React from 'react';
import googleImg from '../../../Images/Social Icon/search.png'
import facebookImg from '../../../Images/Social Icon/facebook.png'
import githubImg from '../../../Images/Social Icon/github.png'
import './SocialLogin.css';
import auth from '../../../firebase.init';
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitHubUser, gitHubLoading, gitHubError] = useSignInWithGithub(auth);

    const location = useLocation();
    const [user] = useAuthState(auth);
    const from = location.state?.from?.pathname || "/";
    
    const googleLogin = () => {
        signInWithGoogle();
    }

    if (loading || gitHubLoading) {
        return <Loading></Loading>
    }
    if (error || gitHubError) {
        toast.error('Something went wrong!', { id: 'An error occur!' })
       
    }
    if (user) {
         navigate(from, { replace: true });
         return
    }
    return (
        <div className='social-login'>

            <p className='or-text'><b>Or sign in with</b></p>
            <div className='social-methods'>
                <div onClick={googleLogin} className="login-methods">
                    <div>
                        <img src={googleImg} alt="" width={'30px'} />
                    </div>
                    <div>
                        <p>Continue with google</p>
                    </div>
                </div>
                <div className="login-methods">
                    <div>
                        <img src={facebookImg} alt="" width={'30px'} />
                    </div>
                    <div>
                        <p>Continue with facebook</p>
                    </div>
                </div>
                <div onClick={() => signInWithGithub()} className="login-methods">
                    <div>
                        <img src={githubImg} alt="" width={'30px'} />
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