import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    displayName: null,
    email: null,
    accessToken: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {

            const { displayName, email, accessToken } = action.payload

            state.displayName = displayName;
            state.email = email;
            state.accessToken = accessToken;
        },
        setSignOutState: (state) => {
            state.displayName = null;
            state.email = null;
            state.accessToken = null;

        }
    }
});

export const { setActiveUser, setSignOutState } = userSlice.actions;
export default userSlice.reducer