import React from 'react'
import './PrimaryButton.styles.css'

export default function PrimaryButton({ content, color, onClick }) {
    return (
        <button onClick={onClick} className='primary-btn' style={{ "backgroundColor": color }}>{content || `Primary`}</button>
    )
}
