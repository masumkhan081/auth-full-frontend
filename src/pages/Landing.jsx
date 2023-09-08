import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Signup from '../components/Signup';
import Login from '../components/Login';

export default function Landing() {

    const [loginView, setLoginView] = useState(true);

    return (
        <div className='w-full  bg-slate-200 min-h-screen'>
            <div className='px-7.2'>

                <AuthToggler current={loginView} toggle={setLoginView} />

                {loginView ? <Signup /> : <Login />}

            </div>
        </div>
    )
}
