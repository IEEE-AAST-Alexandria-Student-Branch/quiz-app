import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { decode } from 'html-entities';
import { setQuestions } from '../features/questions/questionsSlice'
import PrimaryButton from './../components/Form/PrimaryButton';
export default function Questions() {
  // const questions = useSelector(state => state.questions.questions)
  const { topic, level } = useSelector(store => store.user)
  const storeQuestions = useSelector(store => store.questions)

  const dispatch = useDispatch()

  // const getQuestions =  () => {
  //   return async function () {
  //     await fetch(`https://opentdb.com/api.php?amount=10&category=${topic}&difficulty=${level}&type=multiple`)
  //       .then(res => res.json())
  //       .then(data => console.log(data.results))
  //       .then(
  //         questions => dispatch(setQuestions(
  //           questions
  //         ))
  //       )
  //   }
  // }
  const getQuestions = async () => {
    await fetch(`https://opentdb.com/api.php?amount=10&category=${topic}&difficulty=${level}&type=multiple`)
      .then(res => res.json())
      .then(data => console.log(data.results))
      .then(
        questions => dispatch(setQuestions(
          questions
        ))
      )
  }
  useEffect(() => {
    getQuestions()
  }, [])


  console.log(storeQuestions)
  return (
    <div>
      <h1>Questions</h1>
      {
        storeQuestions[0].map((question, index) => {
          return (
            <div key={index}>
              <h2>{decode(question.question)}</h2>
              <div>

              <PrimaryButton content={decode(question.correct_answer)} />
              {
                question.incorrect_answers.map((answer, index) => {
                  return (
                    <PrimaryButton key={index} content={decode(answer)} />
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