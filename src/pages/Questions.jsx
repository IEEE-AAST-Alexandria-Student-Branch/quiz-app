import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { decode } from 'html-entities';

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  // const questions = useSelector(state => state.questions.questions)
  const { topic, level } = useSelector(store => store.user)
  const storeQuestions = useSelector(store => store.questions)

  const dispatch = useDispatch()

  const getQuestions =  () => {
    return async function () {
      await fetch(`https://opentdb.com/api.php?amount=10&category=${topic}&difficulty=${level}&type=multiple`)
        .then(res => res.json())
        .then(data => console.log(data.results))
        .then(
          questions => dispatch(setQuestions(
            [questions]
          ))
        )
    }
  }

  useEffect(() => {
    getQuestions()
  });
  console.log(storeQuestions)
  return (
    <div>
      <h1>Questions</h1>

    </div>
  )
}