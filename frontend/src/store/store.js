import productsReducer from "./productSlice.js"
import authReducer from "./authSlice.js"
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js"
const store = configureStore({
    reducer: {
        products: productsReducer,
        auth: authReducer,
        cart: cartReducer
    },
});

export default store;