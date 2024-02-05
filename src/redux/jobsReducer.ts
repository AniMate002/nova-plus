import { createSlice } from "@reduxjs/toolkit"
import { allBenefits, allJobs, allJobsLocation, allStages } from "./data"


export interface jobI {
    id: number,
    position: string,
    location: string,
    type: string
}

export type jobsType = jobI[]

export interface benefitI {
    id: number,
    icon: string,
    title: string,
    description: string
}

export type benefitsType = benefitI[]

export interface stageI {
    id: number,
    title: string,
    description: string
}

export type stagesType = stageI[]

interface initialStateI {
    jobs: jobsType,
    filteredJobs: jobsType,
    benefits: benefitsType,
    locations: Array<string>,
    stages: stagesType

}

const initialState: initialStateI = {
    jobs: allJobs,
    filteredJobs: [],
    benefits: allBenefits,
    locations: allJobsLocation,
    stages: allStages
}



const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        filterJobs: (state, action) => {
            state.filteredJobs = state.jobs.filter(job => job.location.includes(action.payload))
        },
        resetJobsFilter: (state) => {
            state.filteredJobs = []
        }
    }
})

export const { filterJobs, resetJobsFilter } = jobsSlice.actions
export default jobsSlice.reducer