import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import joi from "joi"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    questions: [],
    name: "osama megahed",
    category: null,
    difficulty: null,
    amount: null,
    loading: false,
    currentIndex: 0,
    Score: 0,
    randomAnswers: [],
    isSelected: false,
    answers: [],
    shuffledAnswers: [],
    lastQuestion: false,
    finalResult: 0,
    // validation
    joiErrors: {},
    isLoading: false,
    formData: {},
    formDataSignIn: {},
    isLoggedIn: false,
    successSignUp: false,
    successSignIn: false,
    allUsers: null,
    registeredEmail: "",
    registeredName: "",
    wrongPassword:"",
}

// *************************get questions********************
export const getQuestions = createAsyncThunk("questions", async (arg, { getState }) => {
    const { questions } = getState();
    try {
        let respose = await fetch(`https://opentdb.com/api.php?amount=${Number(questions.amount)}&category=${Number(questions.category)}&difficulty=${questions.difficulty}`)
        let { results } = await respose.json()
        return results
    } catch (error) {
    }
})
export const Logic = createAsyncThunk("Logic", async (arg, { getState }) => {
    const { questions } = getState();
    try {
        let answers

        if (questions?.questions[questions.currentIndex]?.incorrect_answers.length > 1) {
            answers = [...questions?.questions[questions.currentIndex]?.incorrect_answers, questions?.questions[questions.currentIndex]?.correct_answer]
            return answers

        } else {
            answers = [questions?.questions[questions.currentIndex]?.incorrect_answers[0], questions.questions[questions.currentIndex]?.correct_answer]
            return answers
        }

    } catch (error) {
    }
})
export const NextQuestion = createAsyncThunk("NextQuestion", async (arg, { getState }) => {
    const { questions } = getState();
    try {

        let allAnswers = document.getElementById("allAnswers")
        let BtnAllAnswers = allAnswers.getElementsByTagName("button")
        Array.from(BtnAllAnswers).forEach(btn => {
            return (
                btn.style.color = "#fff",
                btn.style.transform = "scale(1)",
                btn.style.backgroundColor = "#5E71D7"
            )
        })

        let index = questions.currentIndex
        index++;

        if (index < questions.questions.length) {
            return index
        } else {
            return "stop"
        }


    }

    catch (error) {
    }
})

export const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        getQuizSettings: (state, action) => {
            let e = action.payload[0]
            if (action.payload[1] === "category") {
                state.category = e.target.value
            } else if (action.payload[1] === "difficulty") {
                state.difficulty = e.target.value
            } else {
                state.amount = e.target.value
            }
            state.lastQuestion = false
            state.Score = 0
        },
        getanswer: (state, action) => {
            let e = action.payload;
            let newScore = state.Score
            let answer = e.target.textContent
            if (state?.questions[state.currentIndex].correct_answer === answer || Number(answer)) {
                newScore++;
                state.Score = newScore;
                e.target.style.backgroundColor = "#4FC274"
                e.target.style.transform = "scale(1.1)"
            }
            else {
                e.target.style.backgroundColor = "#CD1737"
                let rightAnswer = document.getElementById(`${state?.questions[state.currentIndex].correct_answer}`)
                rightAnswer.style.backgroundColor = "#4FC274"
                rightAnswer.style.transform = "scale(1.1)"

            }
            state.isSelected = true
        },
        grade: (state, action) => {
            let result = (((state.Score) / state.questions.length) * 100).toFixed(0)

            state.finalResult = result
        },
        // ****************Register validation****************
        handleInputRegister: (state, { payload }) => {
            let tempValues = { ...state.formData }
            let e = payload
            tempValues[e.target.name] = e.target.value
            state.formData = tempValues
        },
        validateFormRegister: (state) => {
            let schema = joi.object({

                userName: joi.string().label("userName").pattern(/[A-Za-z]/).min(3).max(12).required().messages({
                    'string.base': `userName should be a type of 'text'`,
                    'string.empty': `userName cannot be an empty field`,
                    'string.min': `userName should have a minimum length of {#limit}`,
                    'string.max': `userName should have a maximum length of {#limit}`,
                    'any.required': `userName is a required field`,
                }),
                age: joi.number().min(16).max(60).required().messages({
                    'number.base': `Age should be a type of 'number'`,
                    'number.empty': `Age cannot be an empty field`,
                    'number.min': `minimum age is {#limit}`,
                    'number.max': `maximum age is {#limit}`,
                    'any.required': `Age is a required field`,
                }),
                email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).messages({
                    'string.base': `Email should be a type of 'text'`,
                    'string.empty': `Email cannot be an empty field`,
                    'any.required': `Email is a required field`,
                }),
                password: joi.string().alphanum().pattern(/[A-Za-z0-9]{5}/).messages({
                    'string.empty': `Password cannot be an empty field`,
                    'string.min': `Password should have a minimum length of {#limit}`,
                    'any.required': `Password is a required field`,
                    'string.pattern.base': "passwords should be letters and numbers only"
                }),
            })
            return schema.validate(state.formData, { abortEarly: false })
        },
        hanldeSubmitRegister: (state, action) => {
            let e = action.payload
            e.preventDefault()
            state.isLoading = true
            let validateResult = questionsSlice.caseReducers.validateFormRegister(state, action)
            let listErrors = {};

            if (validateResult.error) {
                for (let item of validateResult.error.details) {
                    listErrors[item.path[0]] = item.message
                }
                state.joiErrors = listErrors
            }

            else {

                if (localStorage.getItem("Quiz_Users") == null) {
                    state.allUsers = [];
                } else {
                    state.allUsers = JSON.parse(localStorage.getItem("Quiz_Users"))
                }

                let foundEmail = 0
                let foundName = 0
                state.joiErrors.userName = ""
                state.joiErrors.age = ""
                for (let i = 0; i < state.allUsers.length; i++) {
                    if (state.formData.email === state.allUsers[i].email) {
                        foundEmail++;
                    }
                    if (state.formData.userName === state.allUsers[i].userName) {
                        foundName++;
                    }
                }
                if (foundEmail > 0) {
                    state.registeredEmail = "Existed email"
                    state.registeredName = ""
                    state.successSignUp = false

                } else if (foundName > 0) {
                    state.registeredName = "This name has already been taken"
                    state.registeredEmail = ""
                    state.successSignUp = false

                } else {

                    state.allUsers = [...state.allUsers, state.formData]
                    localStorage.setItem("Quiz_Users", JSON.stringify(state.allUsers))
                    state.successSignUp = true
                }
            }

            state.isLoading = false
        },
        // ****************SignIn validation****************
        handleInputSignIn: (state, { payload }) => {
            let tempValues = { ...state.formDataSignIn }
            let e = payload
            tempValues[e.target.name] = e.target.value
            state.formDataSignIn = tempValues
        },
        validateFormSignIn: (state) => {
            let schema = joi.object({
                email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).messages({
                    'string.base': `Email should be a type of 'text'`,
                    'string.empty': `Email cannot be an empty field`,
                    'any.required': `Email is a required field`,
                }),
                password: joi.string().alphanum().pattern(/[A-Za-z0-9]{5}/).messages({
                    'string.empty': `Password cannot be an empty field`,
                    'string.min': `Password should have a minimum length of {#limit}`,
                    'any.required': `Password is a required field`,
                    'string.pattern.base': "passwords should be letters and numbers only"
                }),
            })
            return schema.validate(state.formDataSignIn, { abortEarly: false })
        },
        hanldeSubmitSignIn: (state, action) => {
            let e = action.payload
            e.preventDefault()
            state.isLoading = true
            let validateResult = questionsSlice.caseReducers.validateFormSignIn(state, action)
            let listErrors = {};
            if (validateResult.error) {
                for (let item of validateResult.error.details) {
                    listErrors[item.path[0]] = item.message
                }
                state.joiErrors = listErrors
            }

            else {
                state.joiErrors = {}
                let Quiz_Users = JSON.parse(localStorage.getItem("Quiz_Users"))

                if (localStorage.getItem("Quiz_Users") == null) {
                    state.registeredEmail = "Unregistered email go to register page"
                } else {
                    for (let i = 0; i < Quiz_Users.length; i++) {
                        if (state.formDataSignIn.email === Quiz_Users[i].email && state.formDataSignIn.password === Quiz_Users[i].password) {
                            localStorage.setItem("IEEE_user", JSON.stringify(Quiz_Users[i].userName))
                            localStorage.setItem("osooo", JSON.stringify("osooo"))
                            state.successSignIn = true
                            state.registeredEmail = ""
                            state.wrongPassword = ""
                            state.isLoggedIn = true

                        } else {
                            state.registeredEmail = "Unregistered email go to register page"
                            state.wrongPassword = "Wrong Password"
                        }
                    }
                }
            }
            state.isLoading = false
        },
        logout: (state, action) => {
            localStorage.removeItem("IEEE_user")
            toast("Refresh the page to get out");
        }
    },

    extraReducers: {
        // ************* get products ****************
        [getQuestions.pending]: (state) => {
            state.loading = true
            // state.error = false
        },
        [getQuestions.fulfilled]: (state, action) => {
            state.questions = action.payload
            state.loading = false
            state.currentIndex = 0
            state.lastQuestion = false
            state.Score = 0
        },
        [getQuestions.rejected]: (state) => {
            state.loading = false
        },


        [Logic.fulfilled]: (state, action) => {
            state.shuffledAnswers = action.payload.sort(() => Math.random() - 0.5)
        },

        [NextQuestion.fulfilled]: (state, action) => {

            if (action.payload !== "stop") {
                state.currentIndex = action.payload
                state.isSelected = false
                state.lastQuestion = false
            } else {
                state.lastQuestion = true
            }

        },

    }
})



export default questionsSlice.reducer
export const { } = questionsSlice.actions
export const { getQuizSettings, getanswer, grade, handleInputRegister, hanldeSubmitRegister, handleInputSignIn, hanldeSubmitSignIn, logout } = questionsSlice.actions


























