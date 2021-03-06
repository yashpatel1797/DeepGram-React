import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    user: null,
    isLoading: false,
    error: null,
}

export const loginUser = createAsyncThunk(
    "auth/login",
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const {
                data: { foundUser, encodedToken },
            } = await axios.post("/api/auth/login", { username, password });
            localStorage.setItem("token", encodedToken)
            localStorage.setItem('userData', JSON.stringify(foundUser));
            axios.defaults.headers.common["authorization"] = encodedToken;
            return { foundUser, encodedToken };
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue("Email or password is incorrect");
        }
    }
);


export const signupUser = createAsyncThunk(
    "auth/signup",
    async (userDetails, { rejectWithValue }) => {
        try {
            const {
                data: { createdUser, encodedToken },
            } = await axios.post("/api/auth/signup", { ...userDetails });
            localStorage.setItem("token", encodedToken)
            localStorage.setItem('userData', JSON.stringify(createdUser));
            axios.defaults.headers.common["authorization"] = encodedToken;
            return { createdUser, encodedToken };
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue("Email or password is incorrect");
        }
    }
);

export const editUser = createAsyncThunk(
    "auth/editUser",
    async ({ userData }) => {
        try {
            const {
                data: { user },
            } = await axios.post("/api/users/edit", { userData });
            localStorage.setItem('userData', JSON.stringify(user));
            return user;
        } catch (error) {
            toast.error("Not able to update profile.")
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
        }
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.error = null;
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.user = payload.foundUser;
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.error = payload;
            state.isLoading = false;
        },
        [signupUser.pending]: (state) => {
            state.error = null;
            state.isLoading = true;
        },
        [signupUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.user = payload.createdUser;
        },
        [signupUser.rejected]: (state, { payload }) => {
            state.error = payload;
            state.isLoading = false;
        },
        [editUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;

        }
    }
})

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;