import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState('')
    const [
        signInWithEmailAndPassword,
        emailUser,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const location = useLocation();
    const [user] = useAuthState(auth);
    const from = location.state?.from?.pathname || "/";

    // login
    const login = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        setEmail(email)
        const password = e.target.password.value;
        await signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('http://localhost:5000/token', {email})
        localStorage.setItem('userToken', data.userToken)
        // navigate(from, { replace: true });
    }


    if (error) {
        console.log(error.message);
    }

    if (loading) {
        return <Loading></Loading>;
        
    }
    if (user || emailUser) {
        return navigate(from, { replace: true })
       
    }

    return (
        <div className='login'>
            <h1 className='center-text'>Login</h1>
            <hr />
            <div className='login-sec'>
                <form onSubmit={login} className='login-forum'>
                    <label id='input-label'>Email</label>
                    <input name='email' type="text" placeholder='Email' required/>
                    <label id='input-label'>Password</label>
                    <input name='password' type="password" placeholder='Password' required/>
                    <p onClick={async () => {
                        if(email){
                            await sendPasswordResetEmail(email);
                            toast.success('Sent verification email', { id: 'Sent email successful!' });
                            setErrors('')
                        }else{
                            setErrors('Please enter a valid email.')
                        }
                    }} className='reset-pass' id='input-label'><u>Forget password? Reset</u></p>
                    {
                        error?.message?.includes('auth/wrong-password') && <p className='errors'>Wrong password</p>
                    }
                    {
                        error?.message?.includes('user-not-found') && <p className='errors'>Invalid user</p>
                    }
                    {
                        errors && <p className='errors'>{errors}</p>
                    }
                    <input className='btn' id='login-btn' type="submit" value="Login" />
                </form>

                <label >

                </label>
                <div className='center-text'>
                    <p>Don't have an account? <b onClick={() => navigate('/signup')} className='already-account'>SignUp</b></p>
                </div>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;