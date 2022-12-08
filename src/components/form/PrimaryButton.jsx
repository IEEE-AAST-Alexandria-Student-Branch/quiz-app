import React from 'react'
import './PrimaryButton.styles.css'

export default function PrimaryButton({ content, bgColor, onClick, props }) {
    return (
        <button onClick={onClick} className='primary-btn'  style={{...props}}>{content || `Primary`}</button>
    )
}
