import React from 'react'

export default function Input({ type, pc }) {


    const styLogic = () => type === "text" ? "txt_input" : ""
    return (
        <input type={text} className={styLogic()} placeholder={pc}></input>
    )
}
