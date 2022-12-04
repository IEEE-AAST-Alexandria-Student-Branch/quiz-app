import React from 'react'
import TopicSelector from '../components/begin/TopicSelector'
import LevelSelector from '../components/begin/LevelSelector'
import '../styles/Begin.styles.css'
import PrimaryButton from '../components/form/PrimaryButton'
import { Link } from 'react-router-dom';

export default function Begin() {
    return (
        <div className='main'>
            <section className='Begin'>
                <div className='labels'>
                    <label>Pick A Topic</label>
                    <label>Difficulty Level</label>
                </div>
                <div className='Selectors'>
                    <TopicSelector />
                    <LevelSelector />
                </div>
            </section>
            <div>
                <Link to={'/start'}>

                    <PrimaryButton content={'Start!'} />
                </Link>

            </div>

        </div>


    )
}
