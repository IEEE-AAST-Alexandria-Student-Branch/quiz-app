import React from 'react'
import { useSelector } from 'react-redux'

export default function Questions() {
  const questions = useSelector(state => state.questions.questions)

  return (
    <div>
      <h1>Questions</h1>
      {questions.map(question => (
        <div key={question.id}>
          <p>{question.content}</p>
        </div>
      ))}
    </div>
  )
}