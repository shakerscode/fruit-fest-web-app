import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    // login
    const login = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    if (error) {
        console.log(error.message);
      }

      if (loading) {
        return <Loading></Loading>;
      }
      if (user) {
        navigate('/')
        toast.success('Successfully logged in.', {id: 'Login successful!'})
        return; 
      }

    return (
        <div className='login'>
            <h1 className='center-text'>Login</h1>
            <hr />
            <div className='login-sec'>
                <form onSubmit={login} className='login-forum'>
                    <label id='input-label'>Email</label>
                    <input name='email' type="text" placeholder='Email' />
                    <label id='input-label'>Password</label>
                    <input name='password' type="password" placeholder='Password' />
                    <p id='input-label'>Forget password? <b className='reset-pass'><i><u>Reset</u></i></b></p>
                    {
                        error?.message?.includes('auth/wrong-password') && <p className='errors'>Wrong password</p>
                    }
                    {
                        error?.message?.includes('user-not-found') && <p className='errors'>Invalid user</p>
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