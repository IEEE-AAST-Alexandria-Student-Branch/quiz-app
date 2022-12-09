import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PrimaryButton from '../components/Form/PrimaryButton';
import { Link } from 'react-router-dom';
import { clearQuestions } from '../features/questions/questionsSlice';

export default function Score() {
    const { score, displayName } = useSelector(store => store.user)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(clearQuestions())  
    }
    
    return (
        <div>
            <img src='lamp.png' />

            <h1 style={{ color: 'white', fontSize: '2rem' }}>Congrats {displayName}! Your Score is {score / 10 * 100}%</h1>
            <div style={{ gap: '5rem', display: 'flex' }}>
                <PrimaryButton content={'View my answers'} />
                <Link onClick={handleClick} to={"/start"}>
                    <PrimaryButton content={'Play Again'} />

                </Link>

            </div>
        </div>
    )
}
