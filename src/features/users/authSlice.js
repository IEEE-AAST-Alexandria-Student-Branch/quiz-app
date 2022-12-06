import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
        error: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
});
export default authSlice.reducer;