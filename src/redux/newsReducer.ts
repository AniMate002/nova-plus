import { createSlice } from "@reduxjs/toolkit"
import { allNews, allUniqueNewsTags } from "./data"


export interface newsI {
    date: string,
    year: number,
    images: Array<string>,
    title: string,
    subtitle: string, 
    body: string,
    read:number,
    tags: Array<string>
}

export type allNewsType = newsI[]

interface initialStateI {
    news: allNewsType,
    newsTags: Array<string>
}

const initialState: initialStateI = {
    news: allNews,
    newsTags: allUniqueNewsTags
}


const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {}
})

export default newsSlice.reducer