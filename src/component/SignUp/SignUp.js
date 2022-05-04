import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import './SignUp.css'

const SignUp = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const signUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confPassword = e.target.confirmPassword.value;
        if (password !== confPassword) {
            setErrors("Password don't match!")

        }
        if (password.length < 6) {
            setErrors('Short password')

        }
        if (email && password === confPassword) {
            createUserWithEmailAndPassword(email, password);
        }

    }

    if (error) {
        console.log(error);
    }
    
    if (user) {
        navigate('/')
        toast.success('Login successful!', { id: 'Successful!' })
        return;
    }
    return (
        <div className='signUp'>
            <h1 className='center-text'>SignUp</h1>
            <hr />
            <div className='SignUp-sec'>
                <form onSubmit={signUp} className='login-forum'>
                    <label id='input-label'>Email</label>
                    <input name='email' type="text" placeholder='Email' required />
                    <label id='input-label'>Password</label>
                    <input name='password' type="password" placeholder='Password' required />
                    <label id='input-label'>Confirm password</label>
                    <input name='confirmPassword' type="password" placeholder='Confirm password' required />
                    {
                        errors && <p className='errors'>{errors}</p>
                    }
                    {
                        error?.message?.includes('email-already-in-use') && <p className='errors'>Email is already in use</p>
                    }
                    {/* <p id='input-label'>Forget password? <b className='reset-pass'><i><u>Reset</u></i></b></p> */}
                    <input className='btn' id='login-btn' type="submit" value={loading ? "Loading..." : "SignUp"} />
                </form>

                <label >

                </label>
                <div className='center-text'>
                    <p>Already have an account? <b onClick={() => navigate('/login')} className='already-account'>Login</b></p>
                </div>
            </div>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default SignUp;