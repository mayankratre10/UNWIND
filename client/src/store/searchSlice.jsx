import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:false
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    startSearch(state){
      state.value=true;
    }
  },
})
export const {startSearch} = searchSlice.actions

export default searchSlice.reducer