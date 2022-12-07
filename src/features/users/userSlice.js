import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    displayName: null,
    email: null,
    accessToken: null,
    topic: null,
    level: null,
    score: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {

            const { displayName, email, accessToken, topic, level, score } = action.payload

            state.displayName = displayName;
            state.email = email;
            state.accessToken = accessToken;
            state.topic = topic;
            state.level = level;
            state.score = score;
        },
        setSignOutState: (state) => {

            state.displayName = null;
            state.email = null;
            state.accessToken = null;
            state.topic = null;
            state.level = null;
            state.score = null;

        }
    }
});

export const { setActiveUser, setSignOutState } = userSlice.actions;
export default userSlice.reducer