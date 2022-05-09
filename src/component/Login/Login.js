import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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


    const getEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }
    const getPass = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    // login
    const login = async e => {
        e.preventDefault();
        await signInWithEmailAndPassword(email, password);
        // const {data} = await axios.post('https://agile-fortress-99835.herokuapp.com/token', {email})
        // localStorage.setItem('userToken', data.userToken)
        // navigate(from, { replace: true });
    }

    //handel reset pass
    const handelResetPass = (e) => {
        console.log(email);
        if (email) {
            sendPasswordResetEmail(email);
            toast.success('Sent password reset email', { id: 'Sent email successful!' });
            setErrors('')
        } else {
            setErrors('Please enter a valid email.')
        }
    }

    useEffect( () => {
        if(user || emailUser){ 
            const { data } =  axios.post('https://agile-fortress-99835.herokuapp.com/token', { email })
            localStorage.setItem('userToken', data.userToken)
            navigate(from, { replace: true });
        }
    }, [])

    if (error) {
        console.log(error.message);
    }

    // if (user || emailUser) {
    //     const { data } = axios.post('https://agile-fortress-99835.herokuapp.com/token', { email })
    //     localStorage.setItem('userToken', data.userToken)
    //     navigate(from, { replace: true });

    // }

    return (
        <div className='login'>
            <h1 className='center-text'>Login</h1>
            <hr />
            <div className='login-sec'>
                <form onSubmit={login} className='login-forum'>
                    <label id='input-label'>Email</label>
                    <input onChange={getEmail} name='email' type="text" placeholder='Email' required />
                    <label id='input-label'>Password</label>
                    <input onChange={getPass} name='password' type="password" placeholder='Password' required />
                    <p onClick={handelResetPass} className='reset-pass' id='input-label'><u>Forget password? Reset</u></p>
                    {
                        error?.message?.includes('auth/wrong-password') && <p className='errors'>Wrong password</p>
                    }
                    {
                        error?.message?.includes('user-not-found') && <p className='errors'>Invalid user</p>
                    }
                    {
                        errors && <p className='errors'>{errors}</p>
                    }
                    <input className='btn' id='login-btn' type="submit" value={loading ? 'Loading...' : "Login"} />
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