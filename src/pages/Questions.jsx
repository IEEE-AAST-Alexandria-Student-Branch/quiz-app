import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { decode } from 'html-entities';
import { setQuestions } from '../features/questions/questionsSlice'
import PrimaryButton from './../components/Form/PrimaryButton';
import '../styles/Questions.styles.css'
import { async } from '@firebase/util';

export default function Questions() {
  // const questions = useSelector(state => state.questions.questions)
  const { topic, level } = useSelector(store => store.user)
  const storeQuestions = useSelector(store => store.questions)
  const [questionNumber, setquestionNumber] = useState(0);
  const [isAnswerCorrect, setisAnswerCorrect] = useState(false);

  const dispatch = useDispatch()

  const getQuestions = async () => {
    try {
      await fetch(`https://opentdb.com/api.php?amount=10&category=${topic}&difficulty=${level}&type=multiple`)
        .then(res => res.json())
        .then(({ results }) => {
          if (results[0]) {
            dispatch(setQuestions(results))
          }
          else {
            dispatch(setQuestions(
              [{
                question: 'No Questions Found!',
                correct_answer: '',
                incorrect_answers: []
              }]))
          }
        })

    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    getQuestions()
  }, [])

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const handleClick = () => {
    setquestionNumber(questionNumber + 1)


  }
  var allAnswers = [
    storeQuestions[questionNumber].correct_answer,
    ...storeQuestions[questionNumber].incorrect_answers

  ]
  useMemo(() => shuffleArray(allAnswers), [questionNumber])

  console.log(storeQuestions)

  return (
    <div className="questions">
      {
        <div>
          <h1>
            {decode(storeQuestions[questionNumber].question)}
          </h1>
          <div className="answers">
            {

              allAnswers.map((answer, index) => {
                const handleClick = (e) => {
                  if (e.target.value === storeQuestions[questionNumber].correct_answer) {
                    e.target.style.backgroundColor = 'green'
                    setisAnswerCorrect(true)
                  }
                  else {
                    e.target.style.backgroundColor = 'red'
                    setisAnswerCorrect(false)

                  }
                }
                return (
                  <div className='answers' key={index}>
                    <button value={answer} style={{ backgroundColor: '#3c54d7' }} onClick={(e) => handleClick(e)}>{decode(answer)}</button>
                  </div>
                )
              })
            }
          </div>

          <PrimaryButton content={'Next'} onClick={handleClick} />
        </div>
      }
    </div>

  )

}