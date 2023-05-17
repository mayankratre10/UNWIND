import { createSlice } from '@reduxjs/toolkit'
import { fetchApiData } from '../utils/api'

const initialState = {
  movieGenres:[]
}

export const movieByType = createSlice({
  name: 'movieByType',
  initialState,
  reducers: {
    storeMovies:(state,action)=>{
      state.now_playing=action.payload;
    }
  },
})
export const {storeMovies} = movieByType.actions

export default movieByType.reducer