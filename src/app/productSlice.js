import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
    },
    reducers: {
        setBooks(state, action) {
            // Update the state directly
            state.data = action.payload;
        },
    }
});

export const { setBooks } = productSlice.actions;
export default productSlice.reducer;

export function fetchProduct() {
    return async (dispatch, getState) => {
        try {
            const response = await fetch("https://ecommerce-book-backend-api.onrender.com/books");
            const data = await response.json();
            dispatch(setBooks(data));
        } catch (error) {
            console.log(error);
        }
    }
}
