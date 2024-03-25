import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "../slice/CountSlice";

export const store = configureStore({
    reducer: {
        count: CountSlice
    }
});