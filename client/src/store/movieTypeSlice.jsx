import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  now_playing:[],
  upcoming:[],
  top_rated:[],
  popular:[]
}

export const movieByType = createSlice({
  name: 'movieByType',
  initialState,
  reducers: {
    store_nowMovies:(state,action)=>{
      state.now_playing=action.payload
    },
    store_topMovies:(state,action)=>{
      state.top_rated=action.payload
    },
    store_upcomingMovies:(state,action)=>{
      state.upcoming=action.payload
    },
    store_popularMovies:(state,action)=>{
      state.popular=action.payload
    }
  },
})
export const {store_nowMovies,store_popularMovies,store_topMovies,store_upcomingMovies} = movieByType.actions

export default movieByType.reducer