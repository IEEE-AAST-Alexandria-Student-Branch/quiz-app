import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
    name: "questions",
    initialState: 
        {
            question: null,
            correct_answer: null,
            incorrect_answers: [null]
        }
    ,
    reducers: {
        setQuestions: (state, action) => {
            return [
            
                    ...state.slice(0, action.index),
                    ...action.payload,
                    ...state.slice(action.index),
                

            ]
        }
    }
});

export default questionsSlice.reducer;