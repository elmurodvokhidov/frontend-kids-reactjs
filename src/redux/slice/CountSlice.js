import { createSlice } from "@reduxjs/toolkit";

const initialState = 0

const CountSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        handleInc: (state, action) => {
            return state = state + action.payload;
        },
        handleDec: (state, action) => {
            return state = state - action.payload;
        },
    }
});

export const {
    handleInc,
    handleDec
} = CountSlice.actions;
export default CountSlice.reducer;