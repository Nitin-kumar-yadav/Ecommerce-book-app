import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import orderProfile from "./orderProfile";


const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        orderProfile: orderProfile,
    }
})

export default store;