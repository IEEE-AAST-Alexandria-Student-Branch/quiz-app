import React from 'react'
import { useState } from 'react';
import './Selector.styles.css'
import { useDispatch } from 'react-redux';
import { setActiveUser } from '../../features/users/userSlice';

export default function Start() {
    const levels = [
        { id: 1, name: 'Easy' },
        { id: 2, name: 'Medium' },
        { id: 3, name: 'Difficult' }
    ]
    const [level, setLevel] = useState(null);
    // const dispatch = useDispatch()
    // dispatch(
    //     setActiveUser({
    //         topic
    //     })
    // )
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
