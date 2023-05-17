import { configureStore } from '@reduxjs/toolkit'
import movieByTypeReducer from './movieTypeSlice'

export const store = configureStore({
  reducer: {
    movieByType: movieByTypeReducer,
  },
})