import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { decode } from 'html-entities';
import { setQuestions } from '../features/questions/questionsSlice'
import PrimaryButton from './../components/Form/PrimaryButton';
import '../styles/Questions.styles.css'

export default function Questions() {
  // const questions = useSelector(state => state.questions.questions)
  const { topic, level } = useSelector(store => store.user)
  const storeQuestions = useSelector(store => store.questions)
  const [questionNumber, setquestionNumber] = useState(0);

  const dispatch = useDispatch()

  const getQuestions = async () => {
    await fetch(`https://opentdb.com/api.php?amount=10&category=${topic}&difficulty=${level}&type=multiple`)
      .then(res => res.json())
      .then(
        ({ results }) => dispatch(setQuestions(
          results
        ))
      )
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



  console.log(storeQuestions)
  return (
    <div className="questions">
      {
        storeQuestions.map((question, index) => {
          const allAnswers = [
            ...question.incorrect_answers,
            question.correct_answer
          ]
          const handleClick = (e) => {
            if (e.target.value === question.correct_answer) {
              e.target.style.backgroundColor = 'green'
            }
            else {
              e.target.style.backgroundColor = 'red'

            }
          }
          shuffleArray(allAnswers)
          return (
            <div className="question" key={index}>
              <h2>{decode(question.question)}</h2>
              <div className="allAnswers">
                {
                  allAnswers.map((answer, index) => {
                    return (
                      <button
                        key={index}
                        onClick={handleClick}
                        value={answer}
                      >{decode(answer)}</button>
                    )
                  })
                }
              </div>
            </div>
          )
        }
        )
      }
    </div>
  )

}
