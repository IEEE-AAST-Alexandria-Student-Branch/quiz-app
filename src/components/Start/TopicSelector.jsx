import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Selector.styles.css'

export default function Start() {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");

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
            <select className='Selector' value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value={null}>Topic</option>
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
