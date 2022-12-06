import React from 'react'
import { useState } from 'react';
import './Selector.styles.css'

export default function Start() {
    const levels = [
        { id: 1, name: 'Easy' },
        { id: 2, name: 'Medium' },
        { id: 3, name: 'Difficult' }
    ]
    const [level, setLevel] = useState("");

    console.log(level)
    return (
        <form>
            <select className='Selector' value={level} onChange={(e) => setLevel(e.target.value)} required>
                <option value={''}>Level</option>
                {
                    levels.map(({ name, id }) => {
                        return (
                            <option key={id} value={id}>{name}</option>
                        )
                    })
                }
            </select>
        </form>
    )
}
