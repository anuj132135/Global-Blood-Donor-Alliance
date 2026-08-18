import { createSlice } from '@reduxjs/toolkit'

export const hospitalAuthSlice = createSlice({
  name: 'hospital',
  initialState: {
    value: null
  },
  reducers: {
    setHospital : (state, action) =>{
      state.value = action.payload
    } 
  }
})

export const { setHospital } = hospitalAuthSlice.actions

export default hospitalAuthSlice.reducer