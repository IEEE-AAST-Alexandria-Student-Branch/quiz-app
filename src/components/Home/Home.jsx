import React from 'react'
import PrimaryButton from '../form/PrimaryButton'
import './Home.styles.css'

export default function Home() {
    return (
        <div className='home'>
            <div className='intro-section'>
                <h1>Quizz App</h1>
                <div>
                <PrimaryButton content={'begin'}/>
                </div>
            </div>
            <img src={'/lamp.png'} alt={'logo'} />
        </div>
    )
}
