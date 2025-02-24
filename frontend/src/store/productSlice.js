import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts",
    async () => {
        const { data } = await axios.get("http://localhost:3000/api/products/getAllProducts");
        console.log(data.data.products);
        return data.data.products;
    }
)
const productsSlice = createSlice({
    name: "products",
    initialState: { items: [], status: "idle" },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "failed";
            });
    },
});
export default productsSlice.reducer;