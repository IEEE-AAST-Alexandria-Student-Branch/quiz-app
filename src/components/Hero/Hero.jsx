import React from 'react'
import './Hero.styles.css'
export default function Hero() {
    return (
        <div className='hero'>
            <div className='intro-section'>
                <h1>Quizz App</h1>
                <div>

                <button>begin</button>
                </div>
            </div>
            <img src={'/lamp.png'} alt={'logo'} />
        </div>
    )
}
