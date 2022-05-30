import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
 
  name: 'select',
  initialState: {
    value: "",
  },
  reducers: {
    selectOption: (state, action) => {
      state.value==action.payload.selectedOption
     
    },
  },
 
})
export const { selectOption } = counterSlice.actions

export default counterSlice.reducer;
