import React from 'react'
import './PrimaryButton.styles.css'

export default function PrimaryButton({ content, color }) {
    return (
        <button style={{ "backgroundColor": color }}>{content || `Primary`}</button>
    )
}
