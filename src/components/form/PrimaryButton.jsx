import React from 'react'
import './PrimaryButton.styles.css'

export default function PrimaryButton({ content, color }) {
    return (
        <button className='primary-btn' style={{ "backgroundColor": color }}>{content || `Primary`}</button>
    )
}
