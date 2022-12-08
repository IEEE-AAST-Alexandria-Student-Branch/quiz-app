import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    question: '',
    correct_answer: '',
    incorrect_answers: []
}]

const questionsSlice = createSlice({
    name: "questions",
    initialState
    ,
    reducers: {
        setQuestions: (state, action) => {
            return [
                ...action.payload,
            ];
        }
        ,
        clearQuestions: (state) => {
            return initialState
        }
    }
});

export const { setQuestions, clearQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;