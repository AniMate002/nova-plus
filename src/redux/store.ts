import { configureStore } from '@reduxjs/toolkit'
import modalCardReducer from './modalCardReducer'
import worldMapReducer from './worldMapReducer'
import jobsReducer from './jobsReducer'
import newsReducer from './newsReducer'

export const store = configureStore({
  reducer: {
    modalCard: modalCardReducer,
    worldMap: worldMapReducer,
    jobs: jobsReducer,
    news: newsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch