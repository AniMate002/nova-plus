import { createSlice } from "@reduxjs/toolkit"
import { allCities } from "./data"


export interface cityI {
    name: string,
    description: string,
    image: string,
    left: string,
    top: string
}

export type citiesType = cityI[]

interface initialStateI {
    cities: citiesType
}

const initialState: initialStateI =  {
    cities: allCities
}


export const worldMapSlice = createSlice({
    name: 'worldMap',
    initialState,
    reducers:{}
})


export default worldMapSlice.reducer