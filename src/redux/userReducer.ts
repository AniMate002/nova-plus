import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios, { AxiosHeaders } from 'axios';
import { access } from "fs";

export interface userI {
    "id"?: number,
    "email": string,
    "password": string,
    "name": string,
    "role"?: string,
    "avatar": string
}

interface tokenI {
    "access_token": string
    "refresh_token": string
}

export interface userPayloadI {
    email: string,
    password: string
}

interface initialStateI {
    user: userI | null,
    isLoading: boolean,
    error: null | string,
    isLogged: boolean,
    type: 'Login' | 'Sign up'

}

const initialState: initialStateI = {
    user: null,
    isLoading: false,
    error: null,
    isLogged: false,
    type: 'Login'
}

const BASE_URL_TOKEN: string = 'https://api.escuelajs.co/api/v1/auth/login'
const BASE_URL_USER: string = 'https://api.escuelajs.co/api/v1/auth/profile'
const BASE_URL_CREATE_USER: string = 'https://api.escuelajs.co/api/v1/users/'


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


export const singUpUser = createAsyncThunk<userI, userI, {rejectValue: string}>('user/signUpUser', async (user: userI, {rejectWithValue}) => {
    try{
        const newUser: userI = {...user, avatar: 'https://img.artpal.com/738662/1-23-1-2-14-29-5m.jpg'}
        console.log('sended', newUser)
        const response = await axios.post(BASE_URL_CREATE_USER, newUser)
        const data = response.data
        if(!data)
            throw new Error("Error while creating a new user!")
        return data
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : "Error while creating a new user!"
        return rejectWithValue(errorMessage)
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        changeType: (state, action) => {
            state.type = action.payload
        },
        toggleType: (state) => {
            state.type = state.type === 'Login' ? 'Sign up' : 'Login'
        },
        logOut: (state) => {
            state.isLoading = false
            state.isLogged = false
            state.error = null
        }
    },
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
        .addCase(singUpUser.pending, (state, action) => {
            state.isLoading = true
            state.error = null
        })
        .addCase(singUpUser.fulfilled, (state, action) => {
            console.log(action.payload)
            state.isLoading = false
            state.error = null
            state.user = action.payload
            state.isLogged = true
        })
    }
})


export const { changeType, toggleType, logOut} = userSlice.actions 
export default userSlice.reducer