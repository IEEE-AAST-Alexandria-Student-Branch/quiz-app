import { configureStore } from "@reduxjs/toolkit"
import questionsSlice  from "./questionsSlice"
export const store = configureStore({
    reducer: {
        "questions": questionsSlice,
    }
})
export default store