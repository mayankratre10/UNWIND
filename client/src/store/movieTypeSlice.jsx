import { createSlice } from '@reduxjs/toolkit'
import { fetchApiData } from '../utils/api'

const initialState = {
  now_playing:0
  // upcoming:[],
  // top_rated:[],
  // popular:[]
}

export const movieByType = createSlice({
  name: 'movieByType',
  initialState,
  reducers: {
    fetchMovies:async (state,action)=>{
      // await fetchApiData('/movie/'+action.payload)
      //   .then((res)=>console.log(res));
      state.now_playing=action.payload;
      // console.log(action.payload)
      // switch(action.payload){
      //   case "now_playing":state.now_playing=data.data;break;
      //   case "top_rated":state.top_rated=data.data;break;
      //   case "upcoming":state.upcoming=data.data;break;
      //   case "popular":state.popular=data.data;break;
      //   default:console.log(action.payload);
      // }
      // state.now_playing=data.data;
    }
  },
})
export const {fetchMovies} = movieByType.actions

export default movieByType.reducer