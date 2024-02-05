import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';
import { access } from "fs";

export interface userI {
    "id": number,
    "email": string,
    "password": string,
    "name": string,
    "role": string,
    "avatar": string
}

interface tokenI {
    "access_token": string
    "refresh_token": string
}

interface userPayloadI {
    email: string,
    password: string
}

interface initialStateI {
    user: userI | null,
    isLoading: boolean,
    error: null | string,
    isLogged: boolean
}

const initialState: initialStateI = {
    user: null,
    isLoading: false,
    error: null,
    isLogged: false
}

const BASE_URL_TOKEN: string = 'https://api.escuelajs.co/api/v1/auth/login'
const BASE_URL_USER: string = 'https://api.escuelajs.co/api/v1/auth/profile'


export const logInUser = createAsyncThunk<userI, userPayloadI, {rejectValue: string}>('user/fetchUser', async (user, {rejectWithValue}) => {
    try{

        const res = await axios.post(BASE_URL_TOKEN, user)
        const token = await res.data.access_token
        if(!token)
            throw new Error('Token was not received')
        const res_2 = await axios.get(BASE_URL_USER, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const data = res_2.data as userI
        if(!data)
            throw new Error('Token is not valid')
        return data
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : "Error has eccured"
        return rejectWithValue(errorMessage)
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(logInUser.pending, (state, action) => {
            state.isLoading = true
            state.error = null
        })
        .addCase(logInUser.fulfilled, (state, action) => {
            console.log(action.payload)
            state.isLoading = false
            state.error = null
            state.user = action.payload
            state.isLogged = true
        })
    }
})

export default userSlice.reducer