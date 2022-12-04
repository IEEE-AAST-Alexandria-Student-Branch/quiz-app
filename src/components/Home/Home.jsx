import React from 'react'
import PrimaryButton from '../form/PrimaryButton'
import './Home.styles.css'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='home'>
            <div className='intro-section'>
                <h1>Quizz App</h1>
                <div>
                    <Link to={'/begin'}>
                        <PrimaryButton content={'begin'} />
                    </Link>
                </div>
            </div>
            <img src={'/lamp.png'} alt={'logo'} />
        </div>
    )
}
