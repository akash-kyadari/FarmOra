import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch logged-in user
export const fetchUser = createAsyncThunk("auth/fetchUser", async (credentials, { rejectWithValue }) => {
    try {
        const res = await fetch('http://localhost:3000/api/auth/me', {
            method: 'GET',
            credentials: 'include',
        })
        if (!res.ok) {
            const errorData = await res.json();
            const errorMessage = errorData.error || errorData.message || res.statusText;
            return rejectWithValue({ status: res.status, message: errorMessage }); // Reject with status and message
        }
        const user = await res.json();
        return user;
    } catch (error) {
        return rejectWithValue({ message: errorMessage });
    }
});

// Login user
export const login = createAsyncThunk("auth/login",
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
            if (!res.ok) {
                const errorData = await res.json();
                const errorMessage = errorData.error || errorData.message || res.statusText;
                return rejectWithValue({ status: res.status, message: errorMessage }); // Reject with status and message
            }
            const user = await res.json();
            return user;
        } catch (error) {
            return rejectWithValue({ message: errorMessage });
        }
    });

// Register user
export const register = createAsyncThunk(
    "auth/register",
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await fetch('http://localhost:3000/api/auth/signup', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
            if (!res.ok) {
                const errorData = await res.json();
                const errorMessage = errorData.error || errorData.message || res.statusText;
                return rejectWithValue({ status: res.status, message: errorMessage }); // Reject with status and message
            }
            const user = await res.json();
            return user;
        } catch (error) {
            return rejectWithValue({ message: errorMessage });
        }
    }
);

// Logout user
export const logout = createAsyncThunk("auth/logout", async () => {
    try {
        const res = await fetch('http://localhost:3000/api/auth/logout', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        if (!res.ok) {
            const errorData = await res.json();
            const errorMessage = errorData.error || errorData.message || res.statusText;
            return rejectWithValue({ status: res.status, message: errorMessage }); // Reject with status and message
        }
        const response = await res.json();
        console.log(response);
        return response;
    } catch (error) {
        return rejectWithValue({ message: errorMessage });
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.error = null
                state.user = action.payload;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            })
            .addCase(logout.rejected, (state) => {
                state.error = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.error = action.payload;
            }).addCase(login.rejected, (state, action) => {
                state.error = action.payload;
            });

    },
});

export default authSlice.reducer;
