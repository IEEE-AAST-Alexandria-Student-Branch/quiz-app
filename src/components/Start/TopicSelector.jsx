import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Selector.styles.css'
import { useDispatch } from 'react-redux';
import { setActiveUser } from '../../features/users/userSlice';

export default function Start() {

    const [categories, setCategories] = useState([]);
    const [topic, setTopic] = useState(null);
    const dispatch = useDispatch()

    const getCategories = async () => {
        await fetch('https://opentdb.com/api_category.php')
            .then(res => res.json())
            .then(data => setCategories(data.trivia_categories))
    }

    useEffect(() => {
        getCategories()
    }, []);


    return (
        <div>
            <select className='Selector' value={topic}
                onChange={(e) =>
                    dispatch(setActiveUser({topic:e.target.value}))} 
                    required>
                <option value={''}>Topic</option>
                {
                    categories.map(({ name, id }) => {
                        return (
                            <option key={id} value={id}>{name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}
