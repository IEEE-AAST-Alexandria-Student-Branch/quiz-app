import React, { useRef } from 'react'
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
    const dispatch = useDispatch()

    const [level, setLevel] = useState(null);




    return (
        <form>
        
        <select className='Selector' value={level}
                onChange={(e) =>
                    dispatch(setActiveUser({level:e.target.value}))} 
                    required>
                <option value={''}>Level</option>
                {
                    levels.map(({ name, id }) => {
                        return (
                            <option key={id} value={name.toLowerCase()}>{name}</option>
                        )
                    })
                }
            </select>
        </form>
    )
}
