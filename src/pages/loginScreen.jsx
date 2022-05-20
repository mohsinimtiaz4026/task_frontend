import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoginScreen = () => {

    let navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const formSubmit = async (e) => {
        e.preventDefault();

        const body = {
            username: userName,
            password: password
        }

        const data = await axios.post('http://localhost:8000/users/loginUser', body);

        if (data.status === 200) {
            navigate('/main');
        } else {
            alert('Wrong Credentials !!');
        }

    }

    return (
        <section>
            <div className="container">
                <div className="align-items-center row">
                    <div className="px-lg-4 col-lg-6 order-lg-1 order-2">
                        <div className="card mt-5 mb-5">
                            <div className="px-lg-5 card-header">
                                <div className="card-heading text-danger">DESOL INT.</div>
                            </div>
                            <div className="p-lg-5 card-body">
                                <h3 className="mb-4">Hi, welcome back! 👋👋</h3>
                                <p className="text-muted text-sm mb-5">After Login You Can
                                    Easily Upload Your Data In The DESOL INT.</p>
                                <form id="loginForm" onSubmit={formSubmit}>
                                    <div className="form-floating mb-3">
                                        <label className="form-label" htmlFor="username">Username</label>
                                        <input type="text"
                                            placeholder="Enter your Username" id="username"
                                            className="form-control" onChange={(e) => { setUserName(e.target.value) }} />
                                    </div>
                                    <div className="form-floating mb-3">
                                        <label className="form-label" htmlFor="password">Password</label>
                                        <input type="password"
                                            placeholder="Password" id="password" className="form-control"
                                            onChange={(e) => { setPassword(e.target.value) }} />
                                    </div>
                                    <button
                                        type="submit" className="btn btn-danger btn-lg">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="ms-xl-auto px-lg-4 text-center col-xl-5 col-lg-6 order-lg-2 order-1 my-md-5">
                        <img src={Logo} alt='logo'
                        className='manageImg'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginScreen