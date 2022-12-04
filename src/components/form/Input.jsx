import React from 'react'
import './Input.styles.css'

export default function Input({ type, placeholder, label }) {
    return (
        <>
            <label htmlFor='input'>{label || "label"}</label>
            <input id='input' type={type || "text"} placeholder={placeholder || "placeholder"} />
        </>
    )
}
