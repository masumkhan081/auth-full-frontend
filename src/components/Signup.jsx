import React from 'react'
import Input from '../commonUI/Input'
import Label from '../commonUI/Label'

export default function Signup() {

    function handleSubmit(e) {
        e.preventDefault();

    }

    return (
        <div className='flex flex-col'>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <Label txt="Full Name" />
                    <Input type="text" pc="Enter Full Name"></Input>
                </div>
                <div className='flex flex-col gap-2'>

                </div>
                <div className='flex flex-col gap-2'>

                </div>
            </form>
        </div>
    )
}
