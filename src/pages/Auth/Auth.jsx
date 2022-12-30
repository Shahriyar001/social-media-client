import React from 'react';
import './Auth.css'
import Logo from '../../img/logo.png'
import { Link } from 'react-router-dom';

const Auth = () => {
    return (
        <div className='Auth'>
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>Social Media</h1>
                    <h6>Explore The Idea</h6>
                </div>
            </div>
            <Signup />

        </div>
    );
};

function Signup() {
    return (
        <div className="a-right">
            <form className='infoForm authForm'>
                <h3>Singn up</h3>
                <div>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="infoInput"
                        name="firstname"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="infoInput"
                        name="lastname"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="username"
                        placeholder="Usernames"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="password"
                        placeholder="Password"
                    />
                    <input
                        type="text"
                        className="infoInput"
                        name="confirmpass"
                        placeholder="Confirm Password"
                    />
                </div>

                <div>
                    <span>Already have an account? <Link to='/login' className='text-red-600'>Login!</Link> </span>
                </div>

                <button className="button infoButton" type='submit'>Signup</button>

            </form>
        </div>
    )
}
export default Auth;