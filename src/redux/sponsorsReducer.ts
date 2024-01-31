import { createSlice } from "@reduxjs/toolkit"
import { allSponsors } from "./data"

export interface sponsorI {
    id: number,
    name: string,
    image: string
}

export type sponsorsType = sponsorI[]

interface initialStateI {
    sponsors: sponsorsType
}

const initialState: initialStateI = {
    sponsors: allSponsors
}


const sponsorsSlice = createSlice({
    name: 'sponsors',
    initialState,
    reducers:{}
})