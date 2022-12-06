import { configureStore } from '@reduxjs/toolkit'
import questionsReducer from './features/questions/questionsSlice'
import authReducer from './features/users/authSlice'
import { firebaseReducer } from 'react-redux-firebase'
import userReducer from './features/users/userSlice'


export default configureStore({
    reducer: {
        user: userReducer,
        questions: questionsReducer,
        auth: authReducer,
        firebase: firebaseReducer
    }
})

