import React from 'react'
import { useSelector } from 'react-redux';
import PrimaryButton from '../components/Form/PrimaryButton';
import { Link } from 'react-router-dom';

export default function Score() {
    const { score, displayName } = useSelector(store => store.user)

    return (
        <div>
            <img src='lamp.png' />

            <h1 style={{ color: 'white', fontSize: '2rem' }}>Congrats {displayName}! Your Score is {score / 10 * 100}%</h1>
            <div style={{ gap: '5rem', display: 'flex' }}>
                <PrimaryButton content={'View my answers'} />
                <Link to={"/start"}>
                <PrimaryButton content={'Play Again'} />

                </Link>

            </div>
        </div>
    )
}
