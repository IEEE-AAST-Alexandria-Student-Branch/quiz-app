import React, { useState } from 'react'
import "./QuizInfo.scss"
import { useSelector, useDispatch } from 'react-redux'
import { getQuizSettings, getQuestions } from "../Store/questionsSlice"
import { useNavigate } from "react-router-dom"
import lamp from "../imgs/lamp.png"
import { motion } from "framer-motion"

const QuizInfo = () => {

    let navigate = useNavigate()
    let reduxData = useSelector(state => state.questions)
    let dispatch = useDispatch()
    const [isWrong, setIsWrong] = useState(false);

    const GoToQuestionsHere = () => {
        if (reduxData.category && reduxData.difficulty && reduxData.amount > 0) {
            setIsWrong(false)
            navigate("/QuestionsPage")
            dispatch(getQuestions())
        }
        else {
            setIsWrong(true)
        }
    }
    return (
        <motion.div className="quizInfo"
            animate={{
                scale: [1, 2, 1],
            }}
        >
            <div className="data">
                <div className="categories">
                    <label htmlFor="category" >Pick A Topic</label>
                    <select id="category" name="category" onChange={(e) => dispatch(getQuizSettings([e, "category"]))}>
                        <option hidden>Topic {">"} </option>
                        <option value="9">General Knowledge</option>
                        <option value="22">Geography</option>
                        <option value="24">Politics</option>
                        <option value="18">Science: Computers</option>
                        <option value="23">History</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="21">Art</option>
                        <option value="26">celebrities</option>
                        <option value="10">Books Games</option>
                        <option value="12">Music</option>
                        <option value="15">Video Games</option>
                        <option value="27">Animals</option>
                        <option value="32">Cartoon</option>
                    </select>
                </div>

                <div className="difficulty">
                    <label htmlFor="difficulty" className="label_difficulty"> Difficulty Level </label>
                    <select id="difficulty" name="difficulty" onChange={(e) => dispatch(getQuizSettings([e, "difficulty"]))}>
                        <option hidden>Level {">"}</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className="numberOfQuestions">
                    <label htmlFor="numOfQuestions" className="numOfQuestions">Questions</label>
                    <input type="number" name="" id="numOfQuestions" placeholder="Number Of questions" onChange={(e) => dispatch(getQuizSettings([e, "number"]))} />
                </div>

                <div className="testYourself">
                    <button onClick={() => GoToQuestionsHere()} >Let's start</button>
                </div>

                {isWrong && <h2>You must choose all options</h2>}

            </div>
            <img src={lamp} alt="" />
        </motion.div >
    )
}

export default QuizInfo
