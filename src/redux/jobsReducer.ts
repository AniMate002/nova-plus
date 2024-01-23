import { createSlice } from "@reduxjs/toolkit"
import { allJobs } from "./data"


export interface jobI {
    id: number,
    position: string,
    location: string,
    type: string
}

export type jobsType = jobI[]

interface initialStateI {
    jobs: jobsType
}

const initialState: initialStateI = {
    jobs: allJobs
}



export const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {}
})


export default jobsSlice.reducer