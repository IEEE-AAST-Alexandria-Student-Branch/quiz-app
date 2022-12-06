import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: null,
    lastName: null,
    email: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {

            const { firstName, lastName, email } = action.payload

            state.firstName = firstName;
            state.lastName = lastName;
            state.email = email;
        },
        setSignOutState: (state) => {
            state.firstName = null;
            state.lastName = null;
            state.email = null;
        }
    }
});

export const { setActiveUser, setSignOutState } = userSlice.actions;
export default userSlice.reducer