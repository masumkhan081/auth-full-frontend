import React from 'react'

export default function Input({ type, pc, style }) {


    const styLogic = () => type === "text" ? "txt_inp_form" : ""
    return (
        <input type={type} className={`${styLogic()} ${style}`} placeholder={pc}></input>
    )
}
