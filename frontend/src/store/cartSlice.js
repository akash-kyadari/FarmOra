import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch cart from backend
export const fetchCart = createAsyncThunk("cart/fetchCart", async (_, { rejectWithValue }) => {
    try {
        const response = await fetch("http://localhost:3000/api/cart/getCartItems", {
            credentials: "include",
        });

        if (!response.ok) {
            const errorData = await res.json();
            const errorMessage = errorData.error || errorData.message || res.statusText;
            return rejectWithValue({ status: res.status, message: errorMessage }); // Reject with status and message
        }
        const { cartItems } = await response.json();
        return cartItems
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// Add item to cart
export const addToCart = createAsyncThunk("cart/addToCart", async ({ productId, quantity }, { rejectWithValue }) => {
    try {
        console.log({ productId, quantity });
        const response = await fetch("http://localhost:3000/api/cart/addCartItem", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productId, quantity }),
        });

        if (!response.ok) {
            const errorData = await res.json();
            const errorMessage = errorData.error || errorData.message || res.statusText;
            return rejectWithValue({ status: res.status, message: errorMessage }); // Reject with status and message
        }

        const { cartItems } = await response.json();
        console.log(cartItems);
        return cartItems;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const cartSlice = createSlice({
    name: "cart",
    initialState: { items: [], status: "idle", error: null },
    reducers: {
        updateCartState: (state, action) => {
            state.items = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = "succeeded";
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(addToCart.fulfilled, (state, action) => {

                state.items = action.payload;
                console.log(state.items);
                state.status = "succeeded";
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export default cartSlice.reducer;
