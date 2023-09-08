import React from 'react'

export default function AuthToggler({ current, toggle }) {
    return (
        <div className='flex w-full '>
            <button onClick={() => toggle(!current)} className='btn_auth_toggler'>Sign Up</button>
            <button onClick={() => toggle(!current)} className='btn_auth_toggler'>Log In</button>
        </div>
    )
}
