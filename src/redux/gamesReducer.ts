import { createSlice } from '@reduxjs/toolkit'
import { cardsArray } from './data'

export interface cardI {
    id: number,
    title: string,
    description: string,
    image: string,
    stars: number,
    tags: Array<string>,
    yearReleased: number,
    gameEngine: string,
    platforms: Array<string>,
    type: string
}

export type cardsType = cardI[]

interface initialStateI {
    cards: cardsType,
    activeCard: number
}

const initialState: initialStateI = {
    cards: cardsArray,
    activeCard: 1
}

export const modalCardSlice = createSlice({
    name: 'modaCard',
    initialState,
    reducers:{
        setActiveCard: (state, action) => {
            state.activeCard = action.payload
        }
    }
})

export const { setActiveCard } = modalCardSlice.actions 
export default modalCardSlice.reducer