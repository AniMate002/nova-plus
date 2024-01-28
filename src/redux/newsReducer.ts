import { createSlice } from "@reduxjs/toolkit"
import { allNews, allUniqueNewsTags } from "./data"


export interface newsI {
    id: number,
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
    newsTags: Array<string>,
    filteredNews: allNewsType,
    singleNews: newsI | null
}

const initialState: initialStateI = {
    news: allNews,
    newsTags: allUniqueNewsTags,
    filteredNews: [],
    singleNews: null
}


const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        filterNews:(state, action) => {
            state.filteredNews = state.news.filter(item => item.tags.includes(action.payload))
        },
        clearNewsFilter: (state) => {
            state.filteredNews = []
        },
        findSingleNews: (state, action) => {
            const found = state.news.find(item => item.id == Number(action.payload))

            if(found)
                state.singleNews = found
        }
    }
})

export const { filterNews, clearNewsFilter, findSingleNews } = newsSlice.actions
export default newsSlice.reducer