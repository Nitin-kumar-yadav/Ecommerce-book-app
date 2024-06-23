import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { mainUrl } from "..";

const orderProfile = createSlice({
    name: 'userProfile',
    initialState: {
        data: []
    },
    reducers: {
        setUserProfile: (state, action) => {
            state.data = action.payload;
        }
    }
})
export const { setUserProfile } = orderProfile.actions;

export default orderProfile.reducer;
