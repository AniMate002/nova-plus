import { createSlice } from "@reduxjs/toolkit"
import { wholeTeam } from "./data"

export interface emploeeI {
    id: number,
    name: string,
    position: string,
    image: string
}

export type teamType = emploeeI[]

interface initialStateI {
    team: teamType
}

const initialState: initialStateI = {
    team: wholeTeam
}


export const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers:{}
})


export default teamSlice.reducer