import { createSlice } from "@reduxjs/toolkit"
import { allNews } from "./data"


export interface newsI {
    date: string,
    year: number,
    images: Array<string>,
    title: string,
    subtitle: string, 
    body: string,
    read:number
}

export type allNewsType = newsI[]

interface initialStateI {
    news: allNewsType
}

const initialState: initialStateI = {
    news: allNews
}


const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {}
})

export default newsSlice.reducer