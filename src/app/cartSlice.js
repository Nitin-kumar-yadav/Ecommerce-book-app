import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter((item) => item._id !== action.payload);
        },
        removeAll: (state, action) => {
            return [state.length, action.payload];
        },
    }
});

export const { add, remove, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
