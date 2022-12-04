import React from 'react'
import { useState } from 'react';
import './Selector.styles.css'

export default function Begin() {
    const levels = [
        { id: 1, name: 'Easy' },
        { id: 2, name: 'Medium' },
        { id: 3, name: 'Difficult' }
    ]
    const [level, setLevel] = useState("");

    console.log(level)
    return (
        <div>
            <select className='Selector' value={level} onChange={(e) => setLevel(e.target.value)} >
                <option value={null}>Level</option>
                {
                    levels.map(({ name, id }) => {
                        return (
                            <option key={id} value={id}>{name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}
