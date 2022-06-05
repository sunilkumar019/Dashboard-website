import { createSlice } from '@reduxjs/toolkit';

export const selectSlice = createSlice({
 
  name: 'select',
  initialState: {
    value: "",
  },
  reducers: {
    selectOption: (state, action) => {
      state.value==action.payload.selectOption
     
    },
   
  },
 
})
export const { selectOption } = selectSlice.actions

export default selectSlice.reducer;
