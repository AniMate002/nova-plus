import { createSlice } from '@reduxjs/toolkit'
import { cardsArray, uniqueTags } from './data'

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
    activeCard: number,
    tags: Array<string>,
    filteredGames: cardsType
}

const initialState: initialStateI = {
    cards: cardsArray,
    activeCard: 1,
    tags: uniqueTags,
    filteredGames: []
}

export const modalCardSlice = createSlice({
    name: 'modaCard',
    initialState,
    reducers:{
        setActiveCard: (state, action) => {
            state.activeCard = action.payload
        },
        filterGames: (state, action) => {
            state.filteredGames = state.cards.filter(card => card.tags.includes(action.payload))
        },
        clearGamesFilter: (state) => {
            state.filteredGames = []
        }
    }
})

export const { setActiveCard, filterGames, clearGamesFilter } = modalCardSlice.actions 
export default modalCardSlice.reducer