import { configureStore } from '@reduxjs/toolkit'
import movieByTypeReducer from './movieTypeSlice'
import { fetchMovies } from './movieTypeSlice'
export const store = configureStore({
  reducer: {
    movieByType: movieByTypeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [fetchMovies],
        // ignoredPaths: ['']
      },
    }),
})