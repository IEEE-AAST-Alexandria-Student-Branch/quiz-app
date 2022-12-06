import React from 'react'
import TopicSelector from '../components/Start/TopicSelector'
import LevelSelector from '../components/Start/LevelSelector'
import '../styles/Start.styles.css'
import PrimaryButton from '../components/Form/PrimaryButton'
import { Link } from 'react-router-dom';
import {} from "@reduxjs/toolkit"


export default function Start() {
    return (
        <div className='main'>
            <section className='Start'>
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
                <Link to={'/questions'}>

                    <PrimaryButton content={'Start!'} />
                </Link>

            </div>

        </div>


    )
}
