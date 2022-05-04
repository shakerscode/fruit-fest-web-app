import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    const navigate = useNavigate();

    const signUp = e =>{
        e.preventDefault();
    }
    return (
        <div className='signUp'>
            <h1 className='center-text'>SignUp</h1>
            <div className='SignUp-sec'>
                <form onSubmit={signUp} className='login-forum'>
                    <label id='input-label'>Email</label>
                    <input type="text" placeholder='Email' />
                    <label id='input-label'>Password</label>
                    <input type="password" placeholder='Password' />
                    <label id='input-label'>Confirm password</label>
                    <input type="password" placeholder='Confirm password' />
                    {/* <p id='input-label'>Forget password? <b className='reset-pass'><i><u>Reset</u></i></b></p> */}
                    <input className='btn' id='login-btn' type="submit" value="SignUp" />
                </form>

                <label >

                </label>
                <div className='center-text'>
                    <p>Already have an account? <b onClick={() => navigate('/login')} className='already-account'>SignUp</b></p>
                </div>
            </div>

        </div>
    );
};

export default SignUp;