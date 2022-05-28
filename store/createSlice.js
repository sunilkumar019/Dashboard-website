import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'select',
  initialState:[ {
    value:"",
  }],
  reducers: {
    selectOption: (state, action) => {
     state.push( action.payload)
     
    },
  },
})


export const {selectOption } = counterSlice.actions

export default counterSlice.reducer
