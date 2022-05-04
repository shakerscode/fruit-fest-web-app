import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()


    // login
    const login = e => {
        e.preventDefault()
    }
    return (
        <div className='login'>
            <h1 className='center-text'>Login</h1>
            <div className='login-sec'>
                <form onSubmit={login} className='login-forum'>
                    <label id='input-label'>Email</label>
                    <input type="text" placeholder='Email' />
                    <label id='input-label'>Password</label>
                    <input type="password" placeholder='Password' />
                    <p id='input-label'>Forget password? <b className='reset-pass'><i><u>Reset</u></i></b></p>
                    <input className='btn' id='login-btn' type="submit" value="Login" />
                </form>

                <label >

                </label>
                <div className='center-text'>
                    <p>Don't have an account? <b onClick={() => navigate('/signup')} className='already-account'>SignUp</b></p>
                </div>
            </div>

        </div>
    );
};

export default Login;