import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
    name: "questions",
    initialState: {
        questions: [
            { id: 1, content: "asfasfa" },
            { id: 2, content: "asfasfa" },
            { id: 3, content: "asfasfa" }
        ],
        currentQuestion: 0,
        score: 0,
        topic: "",
        difficulty: "",
        loading: false,
        error: false,
    },
    reducers: {
        setQuestions: (state, action) => {
            state.questions = action.payload;
        }
    }
});

export default questionsSlice.reducer;